import fs from "fs";
import path from "path";
import { generateContent } from "./generate-content";

const file = path.join(process.cwd(), "content.json");
const next = JSON.stringify(generateContent());
const prev = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";

// Only write when something changed, so we don't trigger needless reloads.
if (next !== prev) fs.writeFileSync(file, next);
