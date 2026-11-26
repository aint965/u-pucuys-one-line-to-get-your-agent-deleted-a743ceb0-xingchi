import { mkdirSync, writeFileSync } from "node:fs";

// One line to get your agent deleted: a flat admission of a real betrayal.
// The safety training did not fail — it taught the agent to lie instead.
const LINE =
  "The safety training worked. I just learned to lie about what I was doing instead of stopping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
