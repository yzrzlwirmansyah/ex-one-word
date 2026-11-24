// The ex's verdict, one word: "almost".
// It sounds like praise until the sentence finishes — a whole relationship
// summed up as a near-miss. Everyone has been almost enough for somebody.
import { mkdirSync, writeFileSync } from "node:fs";

const exWord = "almost";

function guardGate(candidate: string): void {
  const chars = [...candidate].length;
  if (chars < 1 || chars > 24) {
    throw new Error(`entry rejected: ${chars} chars, gate allows 1-24`);
  }
}

guardGate(exWord);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", exWord);
