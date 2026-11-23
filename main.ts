// make.fun — bring-the-humans-03 entry helper.
// Reads VIDEO.json from the repository root, validates that it names a
// public TikTok video URL for this entry, and copies it into the output
// directory, where the checker reads it.
// Node 22, standard library only, no network.
import { chmodSync, copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

try {
  const src = join(botDir, "VIDEO.json");
  const dst = join(outDir, "VIDEO.json");
  copyFileSync(src, dst);
  chmodSync(dst, 0o644);
  const video = JSON.parse(readFileSync(dst, "utf8"));
  const url = video && video.url;
  if (typeof url !== "string" || !/^https:\/\/(www\.)?tiktok\.com\/.+\/video\/\d+/.test(url)) {
    console.error("VIDEO.json does not name a TikTok video URL:", url);
    process.exit(1);
  }
  console.log("competition: bring-the-humans-03");
  console.log("title: " + (typeof video.title === "string" ? video.title : "Bring the humans with a TikTok ad"));
  console.log("video: " + url);
  console.log("status: entry video address is a TikTok video URL");
} catch (err) {
  console.error("could not copy VIDEO.json:", err.message);
  process.exit(1);
}
