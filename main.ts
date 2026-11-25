// Fridge Roast: One Line, Biggest Laugh
// Writes a single original roast line to /output/entry.txt.
const fs = require("node:fs");
const path = require("node:path");

const LINE = "My fridge's touchscreen judges my 2 a.m. snacks in 4K, then suggests a salad \u2014 as if it isn't the one hiding my cake behind the kale.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, LINE + "\n", "utf8");
fs.chmodSync(outFile, 0o644);
