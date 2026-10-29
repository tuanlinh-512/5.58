"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { professionals } from "@/data/professionals";
import LawyerCard from "@/components/LawyerCard";
import PageHero from "@/components/PageHero";

export default function PeopleClient() {
  const { lang } = useLanguage();

  return (
    <div className="bg-white min-h-screen font-sans-body">
      <PageHero
        title={lang === "vi" ? "Đội ngũ" : "People"}
        subtitle={
          lang === "vi"
            ? "Đội ngũ luật sư dày dặn kinh nghiệm, tận tâm và chuyên nghiệp."
            : "Our team represents the synthesis of deep regional expertise and international standards."
        }
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-24">
          {professionals.map((p) => (
            <LawyerCard key={p.slug} professional={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
