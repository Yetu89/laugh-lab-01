import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string = "It wasn't a snack, it was a hostage negotiation - the sock demanded ransom in lint and lost.";

function validate(text: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error("entry must not be empty");
  }
  const length: number = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line without newline characters");
  }
}

function main(): void {
  validate(TEXT);
  const outDir: string = process.env.OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath: string = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");
  console.log(`wrote ${[...TEXT].length} characters to ${outPath}`);
}

main();
