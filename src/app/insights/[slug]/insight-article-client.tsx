"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Insight } from "@/data/insights";
import { ArrowLeft } from "lucide-react";
import { newsInsights } from "@/data/insights";

const PAGE = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

export default function InsightArticleClient({
  insight,
  children,
}: {
  insight: Insight;
  children?: ReactNode;
}) {
  const { lang, t } = useLanguage();

  const backHref = insight.stream === "news" ? "/insights/news" : "/insights/legal-updates";
  const backLabel =
    insight.stream === "news" ? t("insights_page.news_page_title") : t("insights_page.legal_page_title");
  const related = newsInsights.filter((i) => i.slug !== insight.slug).slice(0, 3);

  return (
    <main className="bg-white min-h-[60vh]">
      <article className={`${PAGE} py-12 lg:py-16`}>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {backLabel}
        </Link>

        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-4">
          {lang === "vi" ? insight.category : insight.category_en}
        </p>
        <h1 className="text-3xl lg:text-4xl font-sans-body font-semibold text-slate-900 leading-tight max-w-4xl mb-6">
          {lang === "vi" ? insight.title : insight.title_en}
        </h1>
        <p className="text-sm font-sans-body text-slate-500 mb-12">
          {insight.date} · {insight.author}
        </p>
        <div className="max-w-4xl border-t border-slate-100 pt-10">
          {children ?? (
            <p className="text-sm font-sans-body text-slate-600 leading-relaxed whitespace-pre-line">
              {t("insights_page.detail_placeholder")}
            </p>
          )}

          <div className="mt-14 border-t border-slate-100 pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {lang === "vi" ? "Chia sẻ bài viết" : "Share this article"}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:?subject=${encodeURIComponent(lang === "vi" ? insight.title : insight.title_en)}&body=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : "",
                  )}`}
                  className="border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 hover:text-primary hover:border-primary transition-colors"
                >
                  Email
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const url = window.location.href;
                    navigator.clipboard?.writeText(url);
                  }}
                  className="border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 hover:text-primary hover:border-primary transition-colors"
                >
                  {lang === "vi" ? "Copy link" : "Copy link"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-slate-100 pt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
              {lang === "vi" ? "Bài viết liên quan" : "Related Articles"}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/insights/${r.slug}`} className="group border border-slate-200 bg-white p-5 hover:border-primary transition-colors">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                    {lang === "vi" ? r.category : r.category_en}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {lang === "vi" ? r.title : r.title_en}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    {r.date} · {r.author}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
