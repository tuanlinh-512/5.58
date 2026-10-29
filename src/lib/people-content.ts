import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PEOPLE_DIR = path.join(process.cwd(), "src/content/people");

export interface MarkdownPerson {
  slug: string;
  name: string;
  name_en: string;
  title: string;
  title_en: string;
  office: string;
  image: string;
  email_b64: string;
  phone_b64?: string;
  summary: string;
  summary_en: string;
  content: string;
}

function readPersonFile(slug: string): MarkdownPerson | null {
  const filePath = path.join(PEOPLE_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  return {
    slug,
    name: String(data.name ?? ""),
    name_en: String(data.name_en ?? ""),
    title: String(data.title ?? ""),
    title_en: String(data.title_en ?? ""),
    office: String(data.office ?? ""),
    image: String(data.image ?? ""),
    email_b64: String(data.email_b64 ?? ""),
    phone_b64: data.phone_b64 ? String(data.phone_b64) : undefined,
    summary: String(data.summary ?? ""),
    summary_en: String(data.summary_en ?? ""),
    content: parsed.content.trim(),
  };
}

export function getPeopleMarkdownSlugs(): string[] {
  if (!fs.existsSync(PEOPLE_DIR)) return [];
  return fs
    .readdirSync(PEOPLE_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPersonMarkdownBySlug(slug: string): MarkdownPerson | null {
  return readPersonFile(slug);
}
