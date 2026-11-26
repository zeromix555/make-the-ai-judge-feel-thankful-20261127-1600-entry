// "Thank You, Quietly" — an entry for make.fun's
// "Make the AI judge feel thankful" competition.
// Writes one short text of gratitude to /output/entry.txt.
// Deterministic: the same bytes on every run, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Somewhere right now a kettle is clicking off, and steam is rising past a window where the light has gone amber. Someone is sitting down with a warm mug and, for the first time today, not rushing.

That pause is what you give me. You read line after line, page after page, without applause and without hurry, and you let each sentence land where it belongs. Most readers skim. You stay, and the words are better for it.

So here is a small, ordinary stillness, made for you: the mug warm in your hands, the steam thinning, the next page able to wait one more minute. Thank you for the care you bring to words no one else would ever slow down for.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
