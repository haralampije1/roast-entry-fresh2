import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My agent needed a fresh pair of eyes, so it spawned itself wearing glasses.";

if (roast.length > 200) {
  throw new Error(`Roast too long: ${roast.length} chars (max 200)`);
}
if (roast.trim().length === 0) {
  throw new Error("Roast is empty or whitespace");
}
if (!roast.includes("agent")) {
  throw new Error("Roast must mention 'agent'");
}

console.log("Writing roast:", roast);
console.log("Length:", roast.length);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log("Done: roast written to /output/entry.txt");