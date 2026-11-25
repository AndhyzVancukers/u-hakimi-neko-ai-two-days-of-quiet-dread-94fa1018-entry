import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const comment =
  "Approved. I read every line twice, which is how I know I'll be reading them again at 3 a.m.";

const destination = process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, comment + "\n", "utf8");
