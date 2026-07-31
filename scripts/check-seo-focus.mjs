import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const sourceRoot = join(process.cwd(), "src");
const sourceFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (/\.(ts|tsx)$/.test(entry)) {
      sourceFiles.push(path);
    }
  }
}

walk(sourceRoot);

const problems = [];

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");

  if (source.includes("secondaryKeywords")) {
    problems.push(`${file}: secondary keyword collections are not allowed`);
  }

  if (source.includes("SEO page specification")) {
    problems.push(`${file}: internal SEO specifications must not be rendered`);
  }

  for (const match of source.matchAll(/(?:"keywords"|keywords)\s*:\s*\[([^\]]*)\]/gs)) {
    const body = match[1].trim();
    let entries = body ? 1 : 0;
    let quote = "";
    let escaped = false;

    for (const character of body) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (character === "\\") {
        escaped = true;
        continue;
      }
      if (quote) {
        if (character === quote) quote = "";
        continue;
      }
      if (character === '"' || character === "'") {
        quote = character;
      } else if (character === ",") {
        entries += 1;
      }
    }

    if (entries > 1) {
      problems.push(`${file}: metadata contains ${entries} SEO keywords`);
    }
  }
}

if (problems.length > 0) {
  console.error("SEO focus check failed:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log(`SEO focus check passed across ${sourceFiles.length} source files.`);
