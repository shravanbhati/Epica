import sharp from "sharp";

// returns a 1280x720 JPG buffer
export async function forceTo1280x720(input) {
  const img = sharp(input);
  const meta = await img.metadata();

  // smart cover to 1280x720 then ensure exact canvas
  const out = await img
    .resize(1280, 720, { fit: "cover", position: "attention" })
    .jpeg({ quality: 90 })
    .toBuffer();

  return { buffer: out, width: 1280, height: 720, meta };
}
