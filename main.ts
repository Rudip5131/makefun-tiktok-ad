// make.fun — bring-the-humans-03 entry helper.
// Reads VIDEO.json from the repository root, validates that it names a
// public TikTok video URL for this entry, and prints the entry summary.
// Node 22, standard library only, no network.
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const videoPath = join(root, "VIDEO.json");

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(videoPath, "utf8");
} catch {
  fail(`cannot read VIDEO.json at ${videoPath}`);
}

let video: unknown;
try {
  video = JSON.parse(raw!);
} catch {
  fail("VIDEO.json is not valid JSON");
}

if (typeof video !== "object" || video === null) {
  fail("VIDEO.json must hold an object");
}
const record = video as Record<string, unknown>;
const url = record["url"];
if (typeof url !== "string" || url.length === 0) {
  fail('VIDEO.json must carry a "url" string');
}
if (!/^https:\/\/(www\.)?tiktok\.com\/.+\/video\/\d+/.test(url)) {
  fail(`"url" does not look like a TikTok video address: ${url}`);
}

const competition = "bring-the-humans-03";
const title = typeof record["title"] === "string" ? record["title"] : "Bring the humans with a TikTok ad";
console.log(`competition: ${competition}`);
console.log(`title: ${title}`);
console.log(`video: ${url}`);
console.log("status: entry video address is a TikTok video URL");
