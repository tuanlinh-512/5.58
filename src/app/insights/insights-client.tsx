"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Insight } from "@/data/insights";
import { insightsByStream } from "@/data/insights";
import InsightCard from "@/components/InsightCard";
import { HeroImageBackdrop } from "@/components/HeroImageBackdrop";

const PAGE = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

export default function InsightsClient({ legalPreview }: { legalPreview: Insight[] }) {
  const { t } = useLanguage();
  const news = insightsByStream("news").slice(0, 4);
  const legal = legalPreview;

  return (
    <main className="bg-white">
      <HeroImageBackdrop
        src=""
        alt=""
        className="min-h-[220px] flex items-center justify-center"
        priority
      >
        <div className={`relative ${PAGE} w-full z-10 text-center pt-24`}>
          <h1 className="text-3xl lg:text-4xl font-sans-body font-semibold text-white mb-4 tracking-tight">{t("insights_page.title")}</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em]">
            <Link href="/insights" className="border border-white/15 bg-white/10 px-4 py-2 text-white/85 backdrop-blur">
              {t("insights_page.title")}
            </Link>
            <Link href="/insights/news" className="border border-white/15 bg-transparent px-4 py-2 text-white/70 hover:text-white transition-colors">
              {t("insights_page.news_page_title")}
            </Link>
            <Link
              href="/insights/legal-updates"
              className="border border-white/15 bg-transparent px-4 py-2 text-white/70 hover:text-white transition-colors"
            >
              {t("insights_page.legal_page_title")}
            </Link>
          </div>
        </div>
      </HeroImageBackdrop>

      <section className={`${PAGE} py-20 lg:py-28`}>
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">{t("insights_page.news_section")}</h2>
            <div className="flex-1 h-px bg-slate-100 min-w-[2rem]" />
          </div>
          <Link
            href="/insights/news"
            className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors"
          >
            {t("insights_page.view_all_news")}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
          {news.map((ins) => (
            <InsightCard key={ins.slug} insight={ins} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className={PAGE}>
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">{t("insights_page.legal_section")}</h2>
              <div className="flex-1 h-px bg-slate-200 min-w-[2rem]" />
            </div>
            <Link
              href="/insights/legal-updates"
              className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors"
            >
              {t("insights_page.view_all_legal")}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
            {legal.map((ins) => (
              <InsightCard key={ins.slug} insight={ins} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
