import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { newsInsights, type Insight } from "@/data/insights";

const POSTS_DIR = path.join(process.cwd(), "src/content/insights");

function readPostFile(slug: string): { data: Record<string, unknown>; content: string } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

function matterDataToInsight(slug: string, data: Record<string, unknown>): Insight {
  return {
    stream: "legal-updates",
    slug,
    category: String(data.category ?? ""),
    category_en: String(data.category_en ?? ""),
    title: String(data.title ?? ""),
    title_en: String(data.title_en ?? ""),
    author: String(data.author ?? ""),
    date: String(data.date ?? ""),
    publishedAt: String(data.publishedAt ?? ""),
    image: String(data.image ?? ""),
  };
}

/** Legal updates from Markdown files in src/content/insights (server-only). */
export function getLegalUpdatesInsights(): Insight[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const items: Insight[] = [];
  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const parsed = readPostFile(slug);
    if (!parsed) continue;
    items.push(matterDataToInsight(slug, parsed.data as Record<string, unknown>));
  }
  return items.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getLegalPostBySlug(slug: string): { insight: Insight; content: string } | null {
  const parsed = readPostFile(slug);
  if (!parsed) return null;
  const insight = matterDataToInsight(slug, parsed.data as Record<string, unknown>);
  return { insight, content: parsed.content.trim() };
}

export function getLegalPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllInsightsSorted(): Insight[] {
  const legal = getLegalUpdatesInsights();
  return [...newsInsights, ...legal].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
