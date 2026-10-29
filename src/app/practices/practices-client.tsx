"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { practices, getPracticeTitle, getPracticeDesc } from "@/data/practices";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Scale,
  Gavel,
  Building2,
  Landmark,
  TrendingUp,
  HardHat,
  Zap,
  Shield,
  Lightbulb,
  Receipt,
  Briefcase,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Gavel,
  Building2,
  Landmark,
  TrendingUp,
  HardHat,
  Zap,
  Shield,
  Lightbulb,
  Receipt,
  Briefcase,
  Umbrella,
};

export default function PracticesClient() {
  const { lang, t } = useLanguage();
  const featured = new Set(["dispute-arbitration", "corporate-ma"]);

  return (
    <main className="bg-white">
      <PageHero title={t("practices_page.title")} subtitle={t("practices_page.subtitle")} />

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">
        <div className="border-t border-l border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {practices.map((p) => {
              const Icon = iconMap[p.icon] || Scale;
              const isFeatured = featured.has(p.slug);
              const iconClass = "w-8 h-8 stroke-[1.75]";
              return (
                <Link
                  key={p.slug}
                  href={`/practices/${p.slug}`}
                  className={[
                    "group relative flex flex-col p-10 lg:p-14 border-r border-b border-slate-200 transition-all duration-500 overflow-hidden",
                    isFeatured ? "bg-primary/5 hover:bg-primary/8" : "hover:bg-slate-50",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "mb-10 transition-all duration-500 origin-left",
                      isFeatured ? "text-primary/70 group-hover:text-primary" : "text-slate-500 group-hover:text-primary",
                      "group-hover:scale-110",
                    ].join(" ")}
                  >
                    <Icon className={iconClass} />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-serif-display text-slate-900 mb-5 group-hover:text-primary transition-colors duration-300 leading-tight pr-4">
                    {getPracticeTitle(p, lang)}
                  </h3>

                  <p className="text-[13px] font-sans-body text-slate-500 leading-relaxed mb-12 line-clamp-4">
                    {getPracticeDesc(p, lang)}
                  </p>

                  <div className="mt-auto flex items-center gap-3 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/20">
                      {lang === "vi" ? "Chi tiết" : "Details"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {isFeatured ? (
                    <div
                      className="pointer-events-none absolute right-6 top-6 border border-primary/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary"
                      aria-hidden
                    >
                      {lang === "vi" ? "Mũi nhọn" : "Flagship"}
                    </div>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
