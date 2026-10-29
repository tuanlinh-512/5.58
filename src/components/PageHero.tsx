"use client";

import Image from "next/image";

const pageHeroBg = "/assets/page-hero-bg.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative border-b border-slate-200 bg-slate-950">
      <Image
        src={pageHeroBg}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-slate-950/55" aria-hidden />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-14 lg:pt-32 lg:pb-16 text-center">
        <h1 className="text-3xl lg:text-4xl font-sans-body font-semibold tracking-tight text-white mb-4">
          {title}
        </h1>
        <div className="w-2/3 max-w-[14rem] h-0.5 bg-primary mx-auto mb-4" />
        {subtitle && (
          <p className="text-sm lg:text-base font-sans-body text-white/80 max-w-xl leading-relaxed mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
