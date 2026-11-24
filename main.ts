import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string = "It wasn't a snack, it was a hostage negotiation - the sock demanded ransom in lint and lost.";

function validate(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("entry must not be empty or whitespace-only");
  }
  // Count per code point, not UTF-16 code units, so emoji / astral chars count once.
  const codePoints: string[] = [...text];
  const length: number = codePoints.length;
  if (length < 1 || length > 200) {
    throw new Error(
      `entry must be 1-200 characters (code points), got ${length} code points / ${text.length} UTF-16 units`
    );
  }
  if (codePoints.some((ch) => ch === "\n" || ch === "\r")) {
    throw new Error("entry must be exactly one line: no newline or carriage-return characters allowed");
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
