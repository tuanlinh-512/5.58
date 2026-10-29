"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Practice } from "@/data/practices";
import { getPracticeTitle, practicesByNavColumn } from "@/data/practices";
import { professionals, getName, getTitle } from "@/data/professionals";
import { ArrowRight, Mail } from "lucide-react";

const PAGE = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

export default function PracticeDetailClient({ practice }: { practice: Practice }) {
  const { lang, t } = useLanguage();

  const lead = practice.leadSlug ? professionals.find((p) => p.slug === practice.leadSlug) : undefined;
  const body = lang === "vi" ? practice.body_vi : practice.body_en;
  const experience = lang === "vi" ? practice.experience_vi : practice.experience_en;
  const services = lang === "vi" ? practice.services_vi : practice.services_en;
  const related = practicesByNavColumn(practice.navColumn).filter((p) => p.slug !== practice.slug);
  const isArbitration = practice.slug === "dispute-arbitration";

  const notableCases =
    lang === "vi"
      ? [
          "Đại diện nhà thầu quốc tế trong tranh chấp hợp đồng EPC (FIDIC) tại VIAC (giá trị tranh chấp > USD 30 triệu).",
          "Tư vấn chiến lược và đại diện trong thủ tục áp dụng biện pháp khẩn cấp tạm thời phục vụ trọng tài.",
          "Đại diện doanh nghiệp FDI trong tranh chấp cổ đông, đàm phán dàn xếp và thi hành phán quyết trọng tài.",
        ]
      : [
          "Represented an international contractor in an EPC (FIDIC) dispute before VIAC (dispute value > USD 30m).",
          "Advised on strategy and represented client in interim relief measures in support of arbitration.",
          "Represented an FDI enterprise in a shareholder dispute, settlement negotiation, and enforcement of an arbitral award.",
        ];

  return (
    <main className="bg-white">
      <header className={`${PAGE} pt-28 lg:pt-32 pb-16 lg:pb-20`}>
        <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-serif-display text-slate-900 leading-[1.1] tracking-tight max-w-4xl">
          {getPracticeTitle(practice, lang)}
        </h1>
        <div className="mt-8 w-14 h-px bg-primary" />
      </header>

      <div className={`${PAGE} pb-24 lg:pb-32`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-7 space-y-14 lg:space-y-16">
            <section>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                {t("practice_detail.overview")}
              </p>
              <p className="text-base lg:text-[17px] font-sans-body text-slate-700 leading-[1.75] whitespace-pre-line">
                {body}
              </p>
            </section>

            {isArbitration ? (
              <section className="border-t border-slate-200 pt-12">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    {lang === "vi" ? "Các vụ việc tiêu biểu" : "Notable Cases"}
                  </h2>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
                <ul className="space-y-5">
                  {notableCases.map((c) => (
                    <li key={c} className="text-sm lg:text-[15px] font-sans-body text-slate-700 leading-relaxed pl-4 border-l border-primary/40">
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="lg:col-span-5 space-y-8">
            <div className="border border-slate-200/80 px-8 py-10 lg:px-10 lg:py-11">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-8">
                {t("practice_detail.key_services")}
              </p>
              <ul className="space-y-5">
                {services.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-sans-body text-slate-700 leading-relaxed pl-4 border-l border-primary/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-200/80 bg-slate-50/60 px-8 py-10 lg:px-10 lg:py-11">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                {t("practice_detail.experience")}
              </p>
              <p className="text-sm lg:text-[15px] font-sans-body text-slate-700 leading-[1.8] whitespace-pre-line">
                {experience}
              </p>
            </div>

            <div className="border border-slate-200/80 px-8 py-10 lg:px-10 lg:py-11">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                {t("practice_detail.lead_contact")}
              </p>
              {lead ? (
                <div className="space-y-5">
                  <div>
                    <p className="text-lg font-serif-display text-slate-900">{getName(lead, lang)}</p>
                    <p className="text-xs font-sans-body text-slate-500 mt-1 uppercase tracking-wider">
                      {getTitle(lead, lang)}
                    </p>
                  </div>
                  <Link
                    href={`mailto:${lead.email}`}
                    className="inline-flex items-center gap-2 text-sm font-sans-body text-primary hover:opacity-80 transition-opacity"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    {lead.email}
                  </Link>
                  <div>
                    <Link
                      href={`/people/${lead.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-colors"
                    >
                      {t("practice_detail.view_profile")}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-sans-body text-primary hover:opacity-80"
                >
                  {t("practice_detail.contact_firm")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {related.length > 0 && (
              <div className="pt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
                  {t("practice_detail.related")}
                </p>
                <ul className="space-y-3">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/practices/${p.slug}`}
                        className="text-sm font-sans-body text-slate-600 hover:text-primary transition-colors"
                      >
                        {getPracticeTitle(p, lang)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
