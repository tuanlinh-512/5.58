"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsByStream, type Insight, type InsightStream } from "@/data/insights";
import InsightCard from "@/components/InsightCard";
import { HeroImageBackdrop } from "@/components/HeroImageBackdrop";
import { ArrowLeft, Plus } from "lucide-react";

const PAGE = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

const PAGE_SIZE = 10;

export default function InsightsStreamClient({
  stream,
  items: itemsProp,
}: {
  stream: InsightStream;
  /** When set (e.g. legal updates from Markdown), used instead of `insightsByStream`. */
  items?: Insight[];
}) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(PAGE_SIZE);

  const items = useMemo(() => {
    if (itemsProp !== undefined) return itemsProp;
    return insightsByStream(stream);
  }, [stream, itemsProp]);

  const titleKey = stream === "news" ? "insights_page.news_page_title" : "insights_page.legal_page_title";

  return (
    <main className="bg-white">
      <HeroImageBackdrop
        src=""
        alt=""
        className="min-h-[210px] flex items-center justify-center"
      >
        <div className={`relative ${PAGE} w-full z-10 text-center pt-24`}>
          <h1 className="text-3xl lg:text-4xl font-sans-body font-semibold text-white mb-4 tracking-tight">{t(titleKey)}</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em]">
            <Link
              href="/insights"
              className="border border-white/15 bg-transparent px-4 py-2 text-white/70 hover:text-white transition-colors"
            >
              {t("insights_page.title")}
            </Link>
            <Link
              href="/insights/news"
              className={[
                "border border-white/15 px-4 py-2 backdrop-blur transition-colors",
                stream === "news" ? "bg-white/10 text-white/85" : "bg-transparent text-white/70 hover:text-white",
              ].join(" ")}
            >
              {t("insights_page.news_page_title")}
            </Link>
            <Link
              href="/insights/legal-updates"
              className={[
                "border border-white/15 px-4 py-2 backdrop-blur transition-colors",
                stream === "legal-updates" ? "bg-white/10 text-white/85" : "bg-transparent text-white/70 hover:text-white",
              ].join(" ")}
            >
              {t("insights_page.legal_page_title")}
            </Link>
          </div>
        </div>
      </HeroImageBackdrop>

      <div className={`${PAGE} py-10`}>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t("insights_page.back")}
        </Link>
      </div>

      <section className={`${PAGE} pb-24`}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
          {items.slice(0, visible).map((ins) => (
            <InsightCard key={ins.slug} insight={ins} />
          ))}
        </div>

        {visible < items.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, items.length))}
              className="group flex items-center gap-3 px-8 py-4 border border-slate-200 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Plus className="w-3.5 h-3.5 transition-transform group-hover:rotate-90" />
              {t("insights_page.load_more")}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
