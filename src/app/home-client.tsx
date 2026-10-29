"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { practices } from "@/data/practices";
import { professionals, type Professional } from "@/data/professionals";
import type { Insight } from "@/data/insights";
import PracticeCard from "@/components/PracticeCard";
import InsightCard from "@/components/InsightCard";
import { ArrowDown } from "lucide-react";

const RANKING_LOGOS = [
  { src: "/images/awards/chambersandpartners.png", alt: "Chambers and Partners" },
  { src: "/images/awards/legal500.png", alt: "The Legal 500" },
  { src: "/images/awards/iflr1000.png", alt: "IFLR1000" },
  { src: "/images/awards/asialaw.png", alt: "Asialaw" },
] as const;

const CLIENT_LOGOS = [
  { src: "/images/clients/viettel.png", alt: "VIETTEL" },
  { src: "/images/clients/aeon.png", alt: "AEON" },
  { src: "/images/clients/vinamilk.png", alt: "Client" },
  { src: "/images/clients/mb.png", alt: "Client" },
  { src: "/images/clients/jpmorgan.png", alt: "Client" },
  { src: "/images/clients/deloitte.png", alt: "Client" },
  { src: "/images/clients/chubb.png", alt: "Client" },
  { src: "/images/clients/vnpt.png", alt: "Client" },
  { src: "/images/clients/toyota.png", alt: "Client" },
  { src: "/images/clients/masan.png", alt: "Client" },
  { src: "/images/clients/fpt-telecom.png", alt: "Client" },
  { src: "/images/clients/tti.png", alt: "Client" },
] as const;

const HOME_PRACTICE_SLUGS = [
  "dispute-arbitration",
  "dispute-litigation",
  "corporate-ma",
  "banking-finance",
  "capital-markets",
  "real-estate-construction",
  "projects-energy",
  "intellectual-property",
  "tax",
] as const;

const KEY_PROFESSIONAL_SLUGS = [
  "tran-trong-binh",
  "nguyen-thanh-ha",
  "nguyen-trung-kien",
  "cao-minh-truc",
] as const;

const PAGE = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

const SPLIT = "grid gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10";
const COL_LABEL = "lg:col-span-3";
const COL_BODY = "lg:col-span-9";

/** Same style as intro column label */
const KICKER = "font-sans-body text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600";

function proBySlug(slug: string): Professional | undefined {
  return professionals.find((p) => p.slug === slug);
}

/** Left column: kicker + linked title; underline exactly 2/3 of heading line width */
function BlockHeading({ kicker, title, titleId, href }: { kicker: string; title: string; titleId: string; href: string }) {
  return (
    <div className="flex flex-col">
      <p className={KICKER}>{kicker}</p>
      <div className="mt-2 w-max max-w-full">
        <h2 id={titleId} className="font-sans-body text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
          <Link
            href={href}
            className="text-inherit transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            {title}
          </Link>
        </h2>
        <div className="mt-3 h-px w-2/3 bg-slate-900" aria-hidden />
      </div>
    </div>
  );
}

export default function HomeClient({ featuredInsights }: { featuredInsights: Insight[] }) {
  const { lang, t } = useLanguage();
  const introRef = useRef<HTMLElement>(null);

  const scrollToIntro = useCallback(() => {
    introRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const homePractices = HOME_PRACTICE_SLUGS.map((slug) => practices.find((p) => p.slug === slug)).filter(
    Boolean,
  ) as (typeof practices)[number][];

  const keyPeople = KEY_PROFESSIONAL_SLUGS.map((s) => proBySlug(s)).filter(Boolean) as Professional[];

  const heroLine1 = `${t("hero.left_top")} ${t("hero.left_bottom")}`;
  const heroLine2 = `${t("hero.right_top")} ${t("hero.right_bottom")}`;

  const corePracticesTitle = lang === "vi" ? "Lĩnh vực cốt lõi" : "Core Practices";
  const practicesKicker = lang === "vi" ? "Lĩnh vực" : "Practices";
  const keyProfessionalsTitle = lang === "vi" ? "Luật sư chủ chốt" : "Key Professionals";
  const peopleKicker = lang === "vi" ? "Con người" : "People";
  const insightsKicker = lang === "vi" ? "Quan điểm" : "Insights";
  const ctaHeadline = lang === "vi" ? "Trao đổi trực tiếp với các Luật sư Thành viên" : "Speak directly with our Partners";
  const ctaButton = lang === "vi" ? "Liên hệ Luật sư Thành viên" : "Contact Our Partners";

  const heroTitleClass =
    "block w-full font-sans-body text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-tight text-white";

  return (
    <main className="bg-white font-sans-body selection:bg-primary/10 selection:text-primary">
      <section className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-hidden" aria-label="Hero">
      <section className="relative flex min-h-[85vh] flex-col overflow-hidden bg-slate-100" aria-label="Hero">
  
  {/* 1. Ảnh nền: Chọn ảnh skyline thành phố sáng sủa, rực rỡ */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/bg-demo.jpg" // Hãy thay bằng ảnh skyline chất lượng cao
      alt="City Skyline"
      fill
      className="object-cover object-center"
      priority
    />
    {/* Lớp phủ cực nhẹ để chữ trắng nổi bật hơn nhưng không làm tối ảnh */}
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* 2. Nội dung chính: Căn lề theo Logo (Dùng biến PAGE của bạn) */}
  <div className={`relative z-10 flex flex-1 flex-col justify-end ${PAGE} pb-24`}>
    <div className="w-full">
      <h1 className="flex flex-col mb-6">
        {/* Dòng 1: FOR YOUR */}
        <span className="font-sans-body text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-none tracking-tight text-white">
          For Your
        </span>
        {/* Dòng 2: BUSINESS DEVELOPMENT (Viết hoa, in nghiêng nhẹ nếu muốn giống ảnh mẫu) */}
        <span className="font-serif italic text-[clamp(2.5rem,8vw,6rem)] leading-none text-white mt-2">
          Business Development.
        </span>
      </h1>
      
      {/* 3. Đường kẻ mảnh từ rìa trái (phá vỡ container để tràn ra ngoài) */}
      <div className="relative">
        {/* Đường kẻ này sẽ kéo dài từ lề trái màn hình đến một khoảng nhất định */}
        <div className="absolute left-[-100vw] right-0 h-[1px] bg-white/60" />
      </div>
    </div>
  </div>

  {/* 4. Nút cuộn xuống (tùy chọn) */}
  <div className={`${PAGE} relative z-10 pb-8`}>
    <div className="h-12 w-px bg-white/40" /> {/* Một đường line đứng tinh tế */}
  </div>
</section>

        <div className="relative z-10 flex flex-1 flex-col">
          <div className={`flex flex-1 flex-col justify-center ${PAGE} py-24`}>
            <div className="w-full max-w-5xl text-left">
              <h1 className="space-y-2 md:space-y-3">
                <span className={`${heroTitleClass} motion-safe:animate-[fadeUp_900ms_ease-out_both]`}>{heroLine1}</span>
                <span className={`${heroTitleClass} motion-safe:animate-[fadeUp_900ms_ease-out_120ms_both]`}>{heroLine2}</span>
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70">
                {lang === "vi"
                  ? "Hãng luật trọng tính chuẩn mực, tập trung vào giao dịch xuyên biên giới, tranh tụng và trọng tài."
                  : "A standards-driven law firm focused on cross-border transactions, disputes, and arbitration."}
              </p>
            </div>
          </div>

          <div className={`${PAGE} flex justify-start pb-10 pt-4`}>
            <button
              type="button"
              onClick={scrollToIntro}
              aria-label={lang === "vi" ? "Cuộn tới phần giới thiệu" : "Scroll to introduction"}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 active:scale-95"
            >
              <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      <section ref={introRef} id="home-intro" className="scroll-mt-0 border-t border-slate-200 bg-white">
        <div className={`${PAGE} py-24 lg:py-32`}>
          <div className={SPLIT}>
            <div className={COL_LABEL}>
              <div className="w-max max-w-full">
                <Link
                  href="/about"
                  className={`${KICKER} block w-fit transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm`}
                >
                  {lang === "vi" ? "Về BDLAW" : "About BDLAW"}
                </Link>
                <div className="mt-3 h-px w-2/3 bg-slate-900" aria-hidden />
              </div>
            </div>
            <div className={COL_BODY}>
              <p className="font-sans-body text-xl font-medium leading-[1.65] tracking-tight text-slate-900 sm:text-2xl lg:text-[1.65rem] lg:leading-[1.7]">
                {t("home.about_text")}
              </p>
              <p className="mt-10 max-w-3xl font-sans-body text-base leading-[1.85] text-slate-500 lg:text-[17px] lg:leading-[1.9]">
                {t("home.about_sub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-200 bg-neutral-100"
        aria-label={lang === "vi" ? "Logo tổ chức xếp hạng" : "Ranking directory logos"}
      >
        <div className={`${PAGE} flex flex-wrap items-center justify-center gap-x-14 gap-y-12 py-16 lg:gap-x-20 lg:py-20`}>
          {RANKING_LOGOS.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-11 w-auto max-w-[200px] cursor-pointer object-contain transition-transform duration-200 ease-out active:scale-125 md:h-12"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white" aria-labelledby="home-core-practices">
        <div className={`${PAGE} py-24 lg:py-32`}>
          <div className={SPLIT}>
            <div className={`${COL_LABEL}`}>
              <BlockHeading
                kicker={practicesKicker}
                title={corePracticesTitle}
                titleId="home-core-practices"
                href="/practices"
              />
            </div>
            <div className={COL_BODY}>
              {/* 1 col mobile → 2 col tablet → 3 col desktop; reflows when zoom/viewport changes */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-10 xl:grid-cols-3 xl:gap-x-8 2xl:gap-x-10">
                {homePractices.map((p) => (
                  <PracticeCard key={p.slug} practice={p} borderless inGrid />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-200 bg-neutral-50"
        aria-label={lang === "vi" ? "Logo khách hàng" : "Client logos"}
      >
        <div className={`${PAGE} flex flex-wrap items-center justify-center gap-x-16 gap-y-12 py-16 lg:gap-x-24 lg:py-20`}>
          {CLIENT_LOGOS.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt || `Client ${i + 1}`}
              className="h-10 w-auto max-w-[160px] cursor-pointer object-contain opacity-90 transition-transform duration-200 active:scale-125 md:h-12"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white" aria-labelledby="home-key-pro">
        <div className={`${PAGE} py-24 lg:py-32`}>
          <div className={SPLIT}>
            <div className={COL_LABEL}>
              <BlockHeading
                kicker={peopleKicker}
                title={keyProfessionalsTitle}
                titleId="home-key-pro"
                href="/people"
              />
            </div>
            <div className={COL_BODY}>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {keyPeople.map((person) => (
                  <Link key={person.slug} href={`/people/${person.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                      <Image
                        src={person.image}
                        alt={lang === "vi" ? person.name : person.name_en}
                        fill
                        className="object-cover object-top transition-all duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="font-sans-body text-base font-bold leading-snug text-slate-900">
                        {lang === "vi" ? person.name : person.name_en}
                      </p>
                      <p className="mt-1 font-sans-body text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {lang === "vi" ? person.title : person.title_en}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white" aria-labelledby="home-insights-heading">
        <div className={`${PAGE} py-24 lg:py-32`}>
          <div className={SPLIT}>
            <div className={COL_LABEL}>
              <BlockHeading
                kicker={insightsKicker}
                title={t("home.insights_title")}
                titleId="home-insights-heading"
                href="/insights"
              />
            </div>
            <div className={COL_BODY}>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
                {featuredInsights.map((ins) => (
                  <InsightCard key={ins.slug} insight={ins} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white" aria-labelledby="home-cta-heading">
        <div className={`${PAGE} py-12 lg:py-14`}>
          <div className="flex flex-col items-start justify-between gap-6 border border-primary/20 bg-primary/10 px-8 py-8 sm:flex-row sm:items-center sm:gap-8">
            <div className="min-w-0">
              <p className={KICKER}>{lang === "vi" ? "Kết nối" : "Connect"}</p>
              <h2 id="home-cta-heading" className="mt-2 font-sans-body text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {ctaHeadline}
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center bg-primary px-7 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-95"
            >
              {ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
