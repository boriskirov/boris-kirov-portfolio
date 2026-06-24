import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

/**
 * Builds a small content source over a top-level markdown directory.
 *
 * Each source exposes:
 *   - getAllIds()  → [{ params: { id } }]
 *   - getSorted()  → frontmatter + id, sorted newest first by `date`
 *   - getById(id)  → frontmatter + id + contentHtml
 *
 * @param {string} directoryName Directory under the project root (e.g. "posts").
 */
export function createContentSource(directoryName) {
  const directory = path.join(process.cwd(), directoryName);

  const readMarkdown = (id) => {
    const fullPath = path.join(directory, `${id}.md`);
    return matter(fs.readFileSync(fullPath, "utf8"));
  };

  const listIds = () =>
    fs.readdirSync(directory).map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    getAllIds() {
      return listIds().map((id) => ({ params: { id } }));
    },

    getSorted() {
      const all = listIds().map((id) => ({ id, ...readMarkdown(id).data }));
      return all.sort((a, b) => {
        const aDate = a.date ?? "";
        const bDate = b.date ?? "";
        if (aDate < bDate) return 1;
        if (aDate > bDate) return -1;
        return 0;
      });
    },

    async getById(id) {
      const matterResult = readMarkdown(id);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

      return {
        id,
        contentHtml: processedContent.toString(),
        ...matterResult.data,
      };
    },
  };
}

export const posts = createContentSource("posts");
export const cases = createContentSource("cases");
export const codes = createContentSource("codes");
