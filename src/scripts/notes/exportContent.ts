import fs from "fs";
import path from "path";
import { toFullPath } from "@/scripts/notes/paths";

export type ExportedNote = {
  fullPath: string;
  title: string;
  category: string;
  bodyMd: string;
};

export async function exportContentJson(
  files: string[],
  baseDir: string,
  outPath: string = path.join(process.cwd(), "content.json")
): Promise<void> {
  const content: Record<string, ExportedNote> = {};

  for (const abs of files) {
    const fullPath = toFullPath(baseDir, abs);

    try {
      const raw = fs.readFileSync(abs, "utf8");

      // Reuse gray-matter inline to avoid re-importing parseNotes
      // and duplicating the ParsedNote type
      const matter = (await import("gray-matter")).default;
      const { data, content: body } = matter(raw);

      if (!body || !body.trim()) continue;

      const title =
        (typeof data?.title === "string" && data.title.trim()) ||
        path.basename(fullPath);

      const category =
        (typeof data?.category === "string" && data.category.trim()) ||
        path.dirname(fullPath).replace(/\\/g, "/");

      content[fullPath] = {
        fullPath,
        title,
        category,
        bodyMd: body,
      };
    } catch (err) {
      console.warn(`⚠️ Export skipped: ${fullPath}`, err);
    }
  }

  fs.writeFileSync(outPath, JSON.stringify(content, null, 2), "utf8");
  console.log(`\n📦 Exported ${Object.keys(content).length} notes → ${outPath}`);
}