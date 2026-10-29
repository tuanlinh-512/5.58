"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactLink from "@/components/ContactLink";
import MarkdownArticleBody from "@/components/MarkdownArticleBody";
import type { MarkdownPerson } from "@/lib/people-content";

export default function MarkdownProfileClient({ person }: { person: MarkdownPerson }) {
  const { lang } = useLanguage();
  const name = lang === "vi" ? person.name : person.name_en;
  const title = lang === "vi" ? person.title : person.title_en;
  const summary = lang === "vi" ? person.summary : person.summary_en;

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 py-14 lg:py-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="relative aspect-[3/4] overflow-hidden bg-slate-200">
            <Image src={person.image} alt={name} fill className="object-cover grayscale" sizes="220px" priority />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-sans-body font-bold tracking-tight text-slate-900">{name}</h1>
            <p className="mt-2 text-sm font-sans-body uppercase tracking-[0.14em] text-slate-500">{title}</p>
            <p className="mt-4 text-sm font-sans-body text-slate-600 leading-relaxed max-w-2xl">{summary}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-[11px] font-sans-body uppercase tracking-[0.18em]">
              <ContactLink encoded={person.email_b64} type="email" className="text-primary hover:opacity-80">
                Email
              </ContactLink>
              {person.phone_b64 ? (
                <ContactLink encoded={person.phone_b64} type="phone" className="text-primary hover:opacity-80">
                  Phone
                </ContactLink>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-14">
        <div className="max-w-3xl">
          <MarkdownArticleBody content={person.content} />
        </div>
      </section>
    </main>
  );
}
