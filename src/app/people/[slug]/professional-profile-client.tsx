"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Professional } from "@/data/professionals";
import { getName, getTitle, getBio } from "@/data/professionals";
import { practices } from "@/data/practices";
import { Mail, Phone, Download, User } from "lucide-react";
import ContactLink from "@/components/ContactLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsInsights } from "@/data/insights";

export default function ProfessionalProfileClient({
  person,
  encodedEmail,
  encodedPhone,
}: {
  person: Professional;
  encodedEmail: string;
  encodedPhone?: string;
}) {
  const { lang } = useLanguage();

  const education = lang === "vi" ? person.education : person.education_en;

  const imageSrc = person.image?.startsWith("/") ? person.image : `/${person.image}`;
  const displayName = getName(person, lang);
  const isPartner =
    person.category === "Partner" ||
    (lang === "vi" ? person.title : person.title_en).toLowerCase().includes("partner") ||
    (lang === "vi" ? person.title : person.title_en).toLowerCase().includes("thành viên");
  const relatedInsights = newsInsights.slice(0, 3);

  const matchPractice = (name: string) => {
    return practices.find(
      (p) =>
        p.title_en.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(p.title_en.toLowerCase()) ||
        p.title.toLowerCase().includes(name.toLowerCase()),
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <section className="pt-32 pb-16 bg-[#800000] text-white px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="aspect-[3/4] overflow-hidden shadow-2xl relative bg-white/10">
              {person.image ? (
                <Image
                  src={imageSrc}
                  alt={displayName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-20 h-20 text-white/20" />
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between py-1">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-none mb-4">
                {displayName}
              </h1>
              <p className="text-xl font-medium text-white/90">{getTitle(person, lang)} </p>
              <p className="text-sm text-white/70 uppercase tracking-widest mt-1">{person.office} </p>
            </div>

            <div className="space-y-4">
              {encodedPhone ? (
                <div className="flex items-center gap-3 text-[15px]">
                  <Phone className="w-4 h-4 text-white/50 flex-shrink-0" />
                  <ContactLink encoded={encodedPhone} type="phone" className="font-medium hover:text-white/70 transition-all">
                    {lang === "vi" ? "Gọi điện" : "Call"}
                  </ContactLink>
                </div>
              ) : null}
              <div className="flex items-center gap-3 text-[15px]">
                <Mail className="w-4 h-4 text-white/50 flex-shrink-0" />
                <ContactLink encoded={encodedEmail} type="email" className="font-medium border-b border-white/10 pb-0.5 hover:text-white/70 transition-all">
                  {lang === "vi" ? "Gửi email" : "Email"}
                </ContactLink>
              </div>
            </div>

            <div>
            <button
              type="button"
              onClick={() => {
                if (person.pdfUrl) {
                  window.open(person.pdfUrl, "_blank");
                }
              }}
              className={`inline-flex items-center gap-3 bg-white text-[#800000] text-[12px] font-bold uppercase tracking-widest px-10 py-4 hover:bg-black hover:text-white transition-all shadow-lg ${!person.pdfUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!person.pdfUrl}
            >
              <Download className="w-4 h-4 " />
              {lang === "vi" ? "Tải PDF" : "Download PDF"}
            </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-foreground mb-8 border-b border-gray-100 pb-4 uppercase tracking-tight">
              {lang === "vi" ? "Tiểu sử" : "Biography"}
            </h2>
            <div className="space-y-6 text-[17px] leading-[1.8] text-foreground/80 text-justify">
              {getBio(person, lang).split("\n\n").map((para, i) => (
                <p key={i}>{para} </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className="border border-gray-100 bg-white p-6 lg:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                {lang === "vi" ? "Hồ sơ" : "Profile"}
              </p>
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="experience">{lang === "vi" ? "Kinh nghiệm" : "Experience"}</TabsTrigger>
                  <TabsTrigger value="education">{lang === "vi" ? "Học vấn" : "Education"}</TabsTrigger>
                  <TabsTrigger value="languages">{lang === "vi" ? "Ngôn ngữ" : "Languages"}</TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-4">
                    {lang === "vi" ? "Lĩnh vực hành nghề" : "Related Expertise"}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {(lang === "vi" ? person.practices : person.practices_en || person.practices || []).map((p) => {
                      const matched = matchPractice(p);
                      return (
                        <div key={p} className="flex items-start gap-3 text-[15px] border-b border-gray-50 pb-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#800000] shrink-0" />
                          {matched ? (
                            <Link
                              href={`/practices/${matched.slug}`}
                              className="text-[#800000] hover:text-black font-semibold transition-colors"
                            >
                              {p}
                            </Link>
                          ) : (
                            <span className="text-foreground/80 font-medium">{p}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {isPartner ? (
                    <div className="mt-7 rounded-sm border border-primary/15 bg-primary/5 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/80 mb-2">
                        {lang === "vi" ? "Điểm nhấn" : "Highlights"}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {lang === "vi"
                          ? "Dẫn dắt chiến lược pháp lý cho các giao dịch và tranh chấp có yếu tố nước ngoài; ưu tiên tính bảo mật và hiệu quả thực thi."
                          : "Leads legal strategy for cross-border transactions and disputes, prioritizing confidentiality and enforceability."}
                      </p>
                    </div>
                  ) : null}
                </TabsContent>

                <TabsContent value="education" className="mt-6">
                  <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                    {(education || []).map((e, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#800000] shrink-0" />
                        <div>{e}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="languages" className="mt-6">
                  <div className="space-y-6">
                    {((lang === "vi" ? person.admissions : person.admissions_en) || []).filter(Boolean).length > 0 ? (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-4">
                          {lang === "vi" ? "Tư cách hành nghề" : "Admissions"}
                        </h3>
                        <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                          {(lang === "vi" ? person.admissions : person.admissions_en).filter(Boolean).map((adm, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#800000] shrink-0" />
                              {adm}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-4">
                        {lang === "vi" ? "Ngôn ngữ" : "Languages"}
                      </h3>
                      <div className="space-y-3 text-[15px] text-muted-foreground leading-relaxed">
                        <div className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#800000] shrink-0" />
                          {lang === "vi" ? "Tiếng Việt" : "Vietnamese"}
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#800000] shrink-0" />
                          English
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="border border-gray-100 bg-white p-6 lg:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                {lang === "vi" ? "Bài viết liên quan" : "Related Insights"}
              </p>
              <div className="space-y-4">
                {relatedInsights.map((ins) => (
                  <Link key={ins.slug} href={`/insights/${ins.slug}`} className="group block">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      {lang === "vi" ? ins.category : ins.category_en}
                    </p>
                    <p className="mt-1 text-sm font-sans-body font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {lang === "vi" ? ins.title : ins.title_en}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
