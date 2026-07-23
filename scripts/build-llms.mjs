#!/usr/bin/env node

/**
 * Generates `public/llms.txt` — a single Markdown index of the site's
 * canonical routes, formatted for LLM crawlers per the llmstxt.org
 * convention but comfortably readable by humans opening the file directly.
 *
 * Sources of truth:
 *   - public/boris.json     — name, tagline, location, work mode, website
 *   - cases/*.md            — frontmatter (title, description)
 *   - posts/*.md            — frontmatter (title, description)
 *   - codes/*.md            — frontmatter (title, description)
 *   - hardcoded list below  — pages without a markdown source (about,
 *                             playground children, photography, dashboard)
 *
 * Runs automatically before `next build` via the `prebuild` npm hook.
 * Run manually with `npm run build:llms`.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");

const boris = JSON.parse(
  await fs.readFile(path.join(ROOT, "public/boris.json"), "utf8"),
);
const BASE = boris.website;

async function readFrontmatterFrom(dir) {
  const abs = path.join(ROOT, dir);
  const files = (await fs.readdir(abs)).filter((f) => f.endsWith(".md"));
  const items = await Promise.all(
    files.map(async (file) => {
      const id = file.replace(/\.md$/, "");
      const { data } = matter(await fs.readFile(path.join(abs, file), "utf8"));
      return {
        id,
        title: data.title ?? id,
        description: data.description ?? "",
      };
    }),
  );
  return items.sort((a, b) => a.title.localeCompare(b.title));
}

function renderList(items, routePrefix) {
  return items
    .map((item) => {
      const link = `[${item.title}](${BASE}${routePrefix}/${item.id})`;
      return item.description ? `- ${link}: ${item.description}` : `- ${link}`;
    })
    .join("\n");
}

const [cases, posts, codes] = await Promise.all([
  readFrontmatterFrom("cases"),
  readFrontmatterFrom("posts"),
  readFrontmatterFrom("codes"),
]);

const md = `# ${boris.firstName} ${boris.familyName}

> ${boris.metaDescription}
> Based in ${boris.location.city}, ${
  boris.location.country
}. Always ${boris.workMode.toLowerCase()}.

## About

- [About](${BASE}/about): bio, career timeline, education, contact.

## Case studies

${renderList(cases, "/cases")}

## Blog posts

${renderList(posts, "/posts")}

## Design & code

${renderList(codes, "/codes")}
- [My glossary](${BASE}/playground/my-glossary): design methods and practices I follow.
- [My stack](${BASE}/playground/my-stack): tools and software I use daily.
- [Cheatsheets](${BASE}/playground/cheatsheets): commands and shortcuts.

## Optional

- [Photography](${BASE}/photography): mixed media, videography, prints.
- [Dashboard](${BASE}/dashboard): live GitHub activity, highlights, npm packages.
`;

const outPath = path.join(ROOT, "public/llms.txt");
await fs.writeFile(outPath, md);

const totalLinks = md.split("\n").filter((l) => l.startsWith("- [")).length;
console.log(
  `[llms] wrote ${path.relative(ROOT, outPath)} — ${
    md.length
  } bytes, ${totalLinks} links`,
);
