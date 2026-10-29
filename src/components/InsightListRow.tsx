"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Insight } from "@/data/insights";

interface InsightListRowProps {
  insight: Insight;
}

export default function InsightListRow({ insight }: InsightListRowProps) {
  const { lang, t } = useLanguage();

  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex flex-col md:flex-row md:items-start justify-between py-10 border-b border-slate-100 transition-all hover:bg-slate-50/50 px-4 -mx-4"
    >
      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden />
            {insight.date}
          </span>
          <span className="text-primary/60">
            {lang === "vi" ? insight.category : insight.category_en}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-sans-body font-medium text-slate-900 group-hover:text-primary transition-colors duration-300 leading-snug">
          {lang === "vi" ? insight.title : insight.title_en}
        </h3>
        <span className="text-[12px] text-slate-500 font-medium">{insight.author}</span>
      </div>
      <div className="mt-6 md:mt-0 flex items-center gap-3 text-primary self-start md:self-center group-hover:translate-x-2 transition-transform duration-300">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t("insights_page.read_more")}</span>
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  );
}
