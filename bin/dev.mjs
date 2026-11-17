#!/usr/bin/env node
// Runs `next dev` and regenerates content.json whenever a file in ./content
// changes. utils/content.ts imports content.json, so Next's hot reloader
// picks up the new content and refreshes the page.

import { spawn } from "node:child_process";
import { watch } from "chokidar";

const run = (cmd, args) => spawn(cmd, args, { stdio: "inherit" });

const generate = () => run("yarn", ["-s", "content"]);

generate();
const next = run("next", ["dev", ...process.argv.slice(2)]);

let timeout;
watch("./content", { ignoreInitial: true }).on("all", () => {
  clearTimeout(timeout);
  timeout = setTimeout(generate, 50);
});

next.on("exit", (code) => process.exit(code ?? 0));
process.on("SIGINT", () => next.kill("SIGINT"));
