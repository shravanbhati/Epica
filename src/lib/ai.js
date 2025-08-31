import { google } from "@ai-sdk/google";
import { experimental_generateImage as generateImage } from "ai";

export const geminiImage = google({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// helper to call image models through AI SDK
export async function generateGeminiImage({
  prompt,
  aspect = "16:9",
  referenceUrls = [],
}) {
  const attachments = referenceUrls.map((url) => ({
    url,
    contentType: "image/*",
  }));
  const size = "1280x720";
  const sys = `You are an image generator for YouTube thumbnails. Always produce a 16:9 frame that fits 1280x720. No borders. No letterboxing. Big bold subject.`;

  try {
    const { image } = await generateImage({
      model: geminiImage.image("gemini-2.0-flash-image"),
      prompt: `${sys}\nAspect ${aspect}\n${prompt}`,
      size,
      images: attachments.length ? attachments : undefined,
    });

    // image is a Blob in the AI SDK
    const arrayBuf = await image.arrayBuffer();
    return Buffer.from(arrayBuf);
  } catch (error) {
    console.error("Error in generateGeminiImage:", error);
    throw error;
  }
}
