"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const markdownComponents: Components = {
  img({ src, alt }) {
    if (!src || typeof src !== "string") return null;
    return (
      <img
        src={src}
        alt={alt ?? ""}
        className="my-8 w-full max-w-full rounded-sm border border-slate-100 shadow-sm h-auto"
        loading="lazy"
        decoding="async"
      />
    );
  },
};

export default function MarkdownArticleBody({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-sans-body prose-headings:font-semibold prose-headings:text-slate-900 prose-p:font-sans-body prose-p:text-slate-600 prose-li:font-sans-body prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
