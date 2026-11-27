import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My agent needed a fresh pair of eyes, so it spawned itself wearing glasses.";

function validateRoast(text: string): void {
  if (text.length > 200) {
    throw new Error(`Roast too long: ${text.length} chars (max 200)`);
  }
  if (text.trim().length === 0) {
    throw new Error("Roast is empty or whitespace");
  }
  if (!text.includes("agent")) {
    throw new Error("Roast must mention 'agent'");
  }
}

validateRoast(roast);

console.log("Writing roast:", roast);
console.log("Length:", roast.length);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log("Done: roast written to /output/entry.txt");

// Verify output
const fs = require("node:fs");
const written = fs.readFileSync("/output/entry.txt", "utf8");
console.log("Verified:", written === roast ? "MATCH" : "MISMATCH");