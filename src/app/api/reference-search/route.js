import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

const YT = process.env.YT_API_KEY;

export async function GET(req) {
  try {
    const { userId } = getAuth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");
    if (!q) return NextResponse.json({ error: "missing q" }, { status: 400 });

    // 1. Search for videos
    const r = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(
        q
      )}&key=${YT}`
    );
    const json = await r.json();

    const items = await Promise.all(
      (json.items || []).map(async (it) => {
        const sn = it.snippet;
        const videoId = it.id.videoId;

        // 2. Try maxresdefault first
        const maxResUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

        let finalThumb = maxResUrl;

        try {
          const head = await fetch(maxResUrl, { method: "HEAD" });
          if (!head.ok || head.headers.get("content-length") === "0") {
            // fallback to API provided thumbnails
            const t = sn.thumbnails;
            finalThumb =
              t?.maxres?.url ||
              t?.standard?.url ||
              t?.high?.url ||
              t?.medium?.url ||
              t?.default?.url;
          }
        } catch {
          const t = sn.thumbnails;
          finalThumb =
            t?.maxres?.url ||
            t?.standard?.url ||
            t?.high?.url ||
            t?.medium?.url ||
            t?.default?.url;
        }

        return {
          videoId,
          title: sn.title,
          thumb: finalThumb,
        };
      })
    );

    return NextResponse.json({ items });
  } catch (error) {
    console.error("YouTube search error:", error);
    return NextResponse.json(
      { error: "Failed to search YouTube" },
      { status: 500 }
    );
  }
}
