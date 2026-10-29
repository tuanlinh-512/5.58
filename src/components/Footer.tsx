"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { offices } from "@/data/offices";
import Image from "next/image";
import { Facebook, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react";
import ContactLink from "@/components/ContactLink";

const bdlawLogoSvg = "/assets/bdlaw-logo.svg";

export default function Footer() {
  const { lang, t } = useLanguage();

  const sitemapLinks = [
    { label: t("menu.about"), path: "/about" },
    { label: t("menu.practices"), path: "/practices" },
    { label: t("menu.people"), path: "/people" },
    { label: t("menu.insights"), path: "/insights" },
    { label: t("menu.careers"), path: "/careers" },
    { label: t("menu.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-primary font-sans-body text-primary-foreground w-full border-t border-white/5 antialiased">
      {/* 1. KHỐI NỘI DUNG CHÍNH - CONTAINER CÂN GIỮA */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-left">
          
          {/* Cột 1: Logo & Social */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="mb-4 block transition-opacity hover:opacity-100 duration-300 relative w-48 lg:w-56 h-14 lg:h-16">
              <Image
                src={bdlawLogoSvg}
                alt="BDLAW Logo"
                fill
                className="object-contain object-left brightness-0 invert opacity-80"
                sizes="224px"
              />
            </Link>
            
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all rounded-sm"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bdlaw-vietnam/"
                target="_blank"                          // Mở tab mới
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all rounded-sm"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <ContactLink
                encoded="aGFub2lAYmRsYXcuY29tLnZu"
                type="email"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all rounded-sm"
              >
                <Mail className="w-4 h-4" />
              </ContactLink>
            </div>
          </div>

          {/* Cột 2: Sitemap */}
          <div>
            <div className="relative inline-block mb-4">
              <h4 className="text-[11px] font-bold font-sans-body uppercase tracking-[0.25em] text-primary-foreground pb-2">
                {lang === "vi" ? "Sơ đồ trang" : "Sitemap"}
              </h4>
              <span className="absolute bottom-0 left-0 w-[75%] h-px bg-primary-foreground/30"></span>
            </div>
            
            <ul className="space-y-4">
              {sitemapLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.path} className="group text-[13px] font-sans-body text-primary-foreground/60 hover:text-primary-foreground transition-all inline-block">
                    <span className="relative">
                      {l.label}
                      <span className="absolute left-0 bottom-[-4px] w-0 h-px bg-primary-foreground/40 transition-all duration-300 group-hover:w-[85%]"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Offices */}
          <div>
            <div className="relative inline-block mb-4">
              <h4 className="text-[11px] font-bold font-sans-body uppercase tracking-[0.25em] text-primary-foreground pb-2">
                {lang === "vi" ? "Văn phòng" : "Offices"}
              </h4>
              <span className="absolute bottom-0 left-0 w-[75%] h-px bg-primary-foreground/30"></span>
            </div>

            <div className="space-y-8">
              {offices.map((office) => (
                <div key={office.phone} className="space-y-3">
                  <p className="text-[12px] font-bold uppercase tracking-widest text-primary-foreground">
                    {lang === "vi" ? office.city : office.city_en}
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary-foreground/30 flex-shrink-0" />
                    <p className="text-[13px] font-sans-body text-primary-foreground/60 leading-relaxed">
                      {lang === "vi" ? office.address : office.address_en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <div className="relative inline-block mb-4">
              <h4 className="text-[11px] font-bold font-sans-body uppercase tracking-[0.25em] text-primary-foreground pb-2">
                {t("footer.newsletter_title")}
              </h4>
              <span className="absolute bottom-0 left-0 w-[75%] h-px bg-primary-foreground/30"></span>
            </div>
            <p className="text-[13px] font-sans-body text-primary-foreground/60 mb-4 leading-relaxed">
              {t("footer.newsletter_sub")}
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("footer.email_placeholder")}
                className="w-full bg-transparent border-b border-primary-foreground/20 text-[13px] font-sans-body py-3 focus:outline-none focus:border-primary-foreground/60 transition-colors placeholder:text-primary-foreground/30"
              />
              <button type="submit" className="absolute right-0 bottom-3 text-primary-foreground/40 hover:text-primary-foreground transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. KHỐI BẢO LƯU (COPYRIGHT) - QUAY LẠI THIẾT KẾ HAI ĐẦU CÂN ĐỐI */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Trái: Copyright */}
            <p className="text-[12px] font-sans-body text-primary-foreground/40 tracking-wide order-2 md:order-1">
              {t("footer.copyright")}
            </p>
            
            {/* Phải: Privacy & Terms */}
            <div className="flex gap-8 items-center order-1 md:order-2">
              <Link href="/privacy" className="text-[12px] font-sans-body text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="#" className="text-[12px] font-sans-body text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}