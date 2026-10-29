"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Insight } from "@/data/insights";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  const { lang } = useLanguage();

  return (
    <Link href={`/insights/${insight.slug}`} className="group block">
      <div className="relative mb-5 aspect-video overflow-hidden border border-slate-100 bg-slate-950">
        {insight.image ? (
          <Image
            src={insight.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(380px circle at 22% 38%, rgba(128,0,0,0.34), transparent 60%), radial-gradient(320px circle at 78% 30%, rgba(255,255,255,0.10), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.92), rgba(2,6,23,0.72))",
            }}
          />
        )}
        <div className="absolute inset-0 bg-slate-950/25" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.10]"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="absolute left-5 top-5">
          <span className="inline-flex items-center border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            {lang === "vi" ? insight.category : insight.category_en}
          </span>
        </div>
      </div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">
        {lang === "vi" ? insight.category : insight.category_en}
      </p>
      <h3 className="mb-3 line-clamp-2 font-sans-body text-base font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
        {lang === "vi" ? insight.title : insight.title_en}
      </h3>
      <p className="text-xs text-muted-foreground">
        {insight.date} · {insight.author}
      </p>
    </Link>
  );
}
