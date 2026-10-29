"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { offices } from "@/data/offices";
import PageHero from "@/components/PageHero";
import ContactLink from "@/components/ContactLink";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const PAGE_GUTTER = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full";

const sectionTitleClass =
  "font-sans-body font-semibold uppercase tracking-[0.22em] text-primary text-sm sm:text-base md:text-lg";

const contactIconClass = "w-4 h-4 text-primary/80 shrink-0 mt-0.5";

const contactDetailLine =
  "flex gap-3 items-start text-sm font-sans-body text-foreground leading-relaxed";

const officeContactsB64: Record<string, { email: string; phone: string }> = {
  Hanoi: {
    email: "aGFub2lAYmRsYXcuY29tLnZu",
    phone: "Kzg0IDI0IDM4ODggOTk5OQ==",
  },
  "Ho Chi Minh City": {
    email: "aGNtY0BiZGxhdy5jb20udm4=",
    phone: "Kzg0IDI4IDM4MjMgNjg4OA==",
  },
};

export default function ContactClient() {
  const { lang, t } = useLanguage();

  const embedSrc = (mapUrl: string) => {
    const qMatch = mapUrl.match(/[?&]q=([^&]+)/i);
    const q = qMatch ? decodeURIComponent(qMatch[1]) : mapUrl;
    return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  };

  return (
    <>
      <PageHero title={t("contact_page.title")} />

      <section className="py-16 lg:py-24">
        <div className={PAGE_GUTTER}>
          <div className="flex flex-col gap-8 lg:gap-10">
            {offices.map((office, index) => {
              return (
                <article
                  key={office.email}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-sm border border-border bg-card overflow-hidden shadow-sm"
                >
                  <div className="lg:col-span-5 flex flex-col justify-center p-8 sm:p-10 lg:p-12 lg:pl-14 lg:pr-14">
                    <h3 className="text-2xl lg:text-3xl font-sans-body font-semibold text-foreground tracking-tight">
                      {lang === "vi" ? office.heading_vi : office.heading_en}
                    </h3>
                    <div className="mt-6 space-y-4">
                      <div className={contactDetailLine}>
                        <MapPin className={contactIconClass} aria-hidden />
                        <p className="pt-px">{lang === "vi" ? office.address : office.address_en}</p>
                      </div>
                      <div className={contactDetailLine}>
                        <Phone className={contactIconClass} aria-hidden />
                        <ContactLink
                          encoded={officeContactsB64[office.city_en]?.phone}
                          type="phone"
                          className="pt-px tabular-nums hover:text-primary transition-colors"
                        >
                          {lang === "vi" ? "Gọi văn phòng" : "Call office"}
                        </ContactLink>
                      </div>
                      <div className={contactDetailLine}>
                        <Mail className={contactIconClass} aria-hidden />
                        <ContactLink
                          encoded={officeContactsB64[office.city_en]?.email}
                          type="email"
                          className="pt-px break-all hover:text-primary transition-colors"
                        >
                          {lang === "vi" ? "Gửi email" : "Email office"}
                        </ContactLink>
                      </div>
                      <Link
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-label text-primary hover:gap-2.5 transition-all pt-1"
                      >
                        {t("contact_page.google_maps")}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 min-h-[280px]">
                    <iframe
                      title={`${office.city_en} map`}
                      src={embedSrc(office.mapUrl)}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                    />
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-12 text-center text-xs font-sans-body text-muted-foreground/90 tracking-wide">
            {t("contact_page.thank_you")}
          </p>
        </div>
      </section>
    </>
  );
}
