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
  try {
    const { userId } = auth();
    // if (!userId)
    //   return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    console.log(userId);

    const body = await req.json();
    const userPrompt = body.prompt;
    const referenceUrls = body.referenceUrls;

    if (!userPrompt)
      return NextResponse.json({ error: "no prompt" }, { status: 400 });

    // 1 rewrite
    console.log("Rewriting prompt:", userPrompt);
    const sys = `Rewrite for thumbnail generation. Use cinematic lighting. One focal subject. High contrast. Big empty space for text but do not add text. Keep 16:9 frame.`;
    const { text: rewritten } = await generateText({
      model: g("gemini-2.0-flash"),
      prompt: `${sys}\nUser: ${userPrompt}\nReturn one tight directive for an image model`,
    });
    const finalPrompt = rewritten.trim();
    console.log("Rewritten prompt:", finalPrompt);

    // 2 generate
    console.log("Generating image with prompt:", finalPrompt);
    const rawBuffer = await generateGeminiImage({
      prompt: finalPrompt,
      aspect: "16:9",
      referenceUrls: referenceUrls || [],
    });
    console.log("Image generated successfully");

    // 3 force 16 to 9 just in case
    console.log("Processing image to 16:9 aspect ratio");
    const { buffer, width, height } = await forceTo1280x720(rawBuffer);
    console.log("Image processed successfully");

    // 4 upload to storage
    const objectPath = `${userId}/${crypto.randomUUID()}.jpg`;
    console.log("Uploading to storage with path:", objectPath);
    const up = await supabaseServer.storage
      .from("generated")
      .upload(objectPath, buffer, { contentType: "image/jpeg", upsert: false });

    if (up.error) {
      console.error("Supabase upload error:", up.error);
      return NextResponse.json({ error: up.error.message }, { status: 500 });
    }

    console.log("Getting public URL for:", objectPath);
    const pub = supabaseServer.storage
      .from("generated")
      .getPublicUrl(objectPath).data.publicUrl;

    // 5 insert DB row
    console.log("Inserting thumbnail record into database");
    const { error: dbErr } = await supabaseServer.from("thumbnails").insert({
      user_id: userId,
      final_prompt: finalPrompt,
      reference_url: referenceUrls?.[0] || null,
      generated_url: pub,
      width,
      height,
    });

    if (dbErr) {
      console.error("Database insert error:", dbErr);
      return NextResponse.json({ error: dbErr.message }, { status: 500 });
    }

    return NextResponse.json({
      url: pub,
      width,
      height,
      finalPrompt,
    });
  } catch (error) {
    console.error("Error in generate-thumbnail API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
