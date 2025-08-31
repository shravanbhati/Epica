import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const g = google({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

export async function POST(req) {
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const { prompt } = await req.json();
  if (!prompt)
    return NextResponse.json({ error: "no prompt" }, { status: 400 });

  const sys = `Rewrite this prompt for a YouTube thumbnail. Keep it short. Focus on a single subject. Add strong composition cues. Keep 16:9 aspect.`;

  const { text } = await generateText({
    model: g("gemini-2.0-flash"),
    prompt: `${sys}\nUser: ${prompt}\nOutput clear directive for an image model`,
  });

  return NextResponse.json({ finalPrompt: text.trim() });
}
