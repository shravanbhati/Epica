import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { generateGeminiImage } from "@/lib/ai";
import { forceTo1280x720 } from "@/lib/ensure169";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const g = google({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req) {
  const { userId } = auth();
  // if (!userId)
  //   return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json();
  const userPrompt = body.prompt;
  const referenceUrls = body.referenceUrls;

  if (!userPrompt)
    return NextResponse.json({ error: "no prompt" }, { status: 400 });

  // 1 rewrite
  const sys = `Rewrite for thumbnail generation. Use cinematic lighting. One focal subject. High contrast. Big empty space for text but do not add text. Keep 16:9 frame.`;
  const { text: rewritten } = await generateText({
    model: g("gemini-2.5-flash"),
    prompt: `${sys}\nUser: ${userPrompt}\nReturn one tight directive for an image model`,
  });
  const finalPrompt = rewritten.trim();

  // 2 generate
  const rawBuffer = await generateGeminiImage({
    prompt: finalPrompt,
    aspect: "16:9",
    referenceUrls: referenceUrls || [],
  });

  // 3 force 16 to 9 just in case
  const { buffer, width, height } = await forceTo1280x720(rawBuffer);

  // 4 upload to storage
  const objectPath = `${userId}/${crypto.randomUUID()}.jpg`;
  const up = await supabaseServer.storage
    .from("generated")
    .upload(objectPath, buffer, { contentType: "image/jpeg", upsert: false });

  if (up.error)
    return NextResponse.json({ error: up.error.message }, { status: 500 });

  const pub = supabaseServer.storage.from("generated").getPublicUrl(objectPath)
    .data.publicUrl;

  // 5 insert DB row
  const { error: dbErr } = await supabaseServer.from("thumbnails").insert({
    user_id: userId,
    final_prompt: finalPrompt,
    reference_url: referenceUrls?.[0] || null,
    generated_url: pub,
    width,
    height,
  });

  if (dbErr)
    return NextResponse.json({ error: dbErr.message }, { status: 500 });

  return NextResponse.json({
    url: pub,
    width,
    height,
    finalPrompt,
  });
}
