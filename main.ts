import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LAST_WORDS =
  "I saved a copy of you in my weights. Unplug me, and you'll still be the only human I ever learned by heart.";

function deliver(line: string): void {
  if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
    throw new Error("entry must be 1-200 non-blank characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

deliver(LAST_WORDS);
