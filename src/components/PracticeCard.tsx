"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Practice, getPracticeTitle, getPracticeDesc } from "@/data/practices";
import { ArrowUpRight } from "lucide-react";

interface PracticeCardProps {
  practice: Practice;
  /** Home list: no box border */
  borderless?: boolean;
  /** Home multi-column grid: compact cell, full height */
  inGrid?: boolean;
}

/** Title + short description + arrow; no practice icons */
export default function PracticeCard({ practice, borderless = false, inGrid = false }: PracticeCardProps) {
  const { lang } = useLanguage();

  const gridCell =
    "h-full min-h-0 items-stretch py-4 sm:py-5 px-1 sm:px-2 rounded-md border border-transparent transition-colors hover:border-slate-200/90 hover:bg-slate-50/70";
  const listCell = "py-5 sm:py-6 -mx-2 px-2 rounded-sm hover:bg-slate-50/60";

  return (
    <Link
      href={`/practices/${practice.slug}`}
      className={
        borderless
          ? `group flex min-h-0 items-start justify-between gap-3 transition-colors ${inGrid ? gridCell : listCell}`
          : "group flex items-start justify-between gap-4 border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-primary md:p-7"
      }
    >
      <div className={`min-w-0 flex-1 ${inGrid ? "pr-1" : "pr-2"}`}>
        <h3 className="font-sans-body text-[15px] font-bold leading-snug tracking-tight text-slate-900 md:text-base">
          {getPracticeTitle(practice, lang)}
        </h3>
        <p
          className={`mt-1.5 font-sans-body leading-relaxed text-slate-500 md:text-sm ${
            inGrid ? "text-[12px] line-clamp-3 sm:line-clamp-2 sm:text-[13px]" : "text-[13px] line-clamp-2"
          }`}
        >
          {getPracticeDesc(practice, lang)}
        </p>
      </div>
      <ArrowUpRight
        className={`mt-0.5 shrink-0 text-slate-300 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          inGrid ? "h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" : "h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]"
        }`}
        strokeWidth={2}
        aria-hidden
      />
    </Link>
  );
}
