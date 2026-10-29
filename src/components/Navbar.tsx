"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { practices, practicesByNavColumn, getPracticeTitle } from "@/data/practices";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const bdlawLogoSvg = "/assets/bdlaw-logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practicesOpen, setPracticesOpen] = useState(false);
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header hóa trắng ngay lập tức khi mở Menu Mobile (!mobileOpen)
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled && !mobileOpen;

  const practicesDispute = practicesByNavColumn("dispute");
  const practicesTransactions = practicesByNavColumn("transactions");
  const practicesAdvisory = practicesByNavColumn("advisory");

  const navLinks = [
    { key: "about", path: "/about" },
    { key: "practices", path: "/practices" },
    { key: "people", path: "/people" },
    { key: "insights", path: "/insights" },
    { key: "careers", path: "/careers" },
    { key: "contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setPracticesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setPracticesOpen(false), 150);
  };

  const handlePracticeClick = (slug: string) => {
    setPracticesOpen(false);
    setMobileOpen(false);
    setMobilePracticesOpen(false);
    router.push(`/practices/${slug}`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-24 flex items-center ${
        isTransparent 
          ? "bg-transparent border-transparent" 
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        
        {/* LOGO SVG - ĐÃ FIX LỖI CLICK TRÊN MOBILE */}
        <Link 
          href="/" 
          className="flex-shrink-0 flex items-center"
          onClick={() => {
            setMobileOpen(false); // Thu giao diện 3 gạch khi ấn Logo
            setMobilePracticesOpen(false);
          }}
        >
          <div
            className={`relative transition-all duration-500 ease-in-out flex items-center ${
              isTransparent
                ? "w-64 lg:w-120 h-16 lg:h-22 mt-12"
                : "w-44 lg:w-64 h-12 lg:h-14 mt-0"
            }`}
          >
            <Image
              src={bdlawLogoSvg}
              alt="BDLAW Logo"
              fill
              className={`object-contain transition-all duration-500 ${
                isTransparent ? "brightness-200 grayscale-[0.3] contrast-125" : "brightness-100"
              }`}
              sizes="(max-width: 1024px) 200px, 280px"
              priority
            />
          </div>
        </Link>

        {/* CỤM MENU DESKTOP */}
        <div className="hidden lg:flex items-center ml-auto gap-10">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.key === "practices" ? (
                <div key={link.key} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Link
                    href="/practices"
                    className={`flex items-center gap-1 text-sm font-sans-body font-medium transition-colors duration-300 hover:text-primary ${
                      isActive("/practices") 
                        ? "text-primary border-b-2 border-primary pb-0.5" 
                        : (isTransparent ? "text-white" : "text-foreground")
                    }`}
                  >
                    {t(`menu.${link.key}`)}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${practicesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {practicesOpen && <div className="absolute top-full left-0 w-full h-8" />}

                  {/* DROPDOWN DESKTOP */}
                  {practicesOpen && (
                    <div className="absolute top-[calc(100%+24px)] -left-48 w-[min(92vw,880px)] bg-white/90 backdrop-blur-xl shadow-2xl p-10 z-50 rounded-sm border-t border-gray-100 animate-in fade-in slide-in-from-top-1 duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            {t("menu.practices_col_dispute")}
                          </p>
                          <ul className="space-y-3">
                            {practicesDispute.map((p) => (
                              <li key={p.slug}>
                                <button
                                  type="button"
                                  onClick={() => handlePracticeClick(p.slug)}
                                  className="group flex items-center text-[13px] font-sans-body text-foreground/80 hover:text-primary transition-colors w-full text-left"
                                >
                                  <span className="w-0 group-hover:w-3 mr-0 group-hover:mr-2 h-px bg-primary transition-all duration-300 shrink-0" />
                                  {getPracticeTitle(p, lang)}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="sm:border-l border-gray-100 sm:pl-8">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            {t("menu.practices_col_transactions")}
                          </p>
                          <ul className="space-y-3">
                            {practicesTransactions.map((p) => (
                              <li key={p.slug}>
                                <button
                                  type="button"
                                  onClick={() => handlePracticeClick(p.slug)}
                                  className="group flex items-center text-[13px] font-sans-body text-foreground/80 hover:text-primary transition-colors w-full text-left"
                                >
                                  <span className="w-0 group-hover:w-3 mr-0 group-hover:mr-2 h-px bg-primary transition-all duration-300 shrink-0" />
                                  {getPracticeTitle(p, lang)}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="sm:border-l border-gray-100 sm:pl-8">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            {t("menu.practices_col_advisory")}
                          </p>
                          <ul className="space-y-3">
                            {practicesAdvisory.map((p) => (
                              <li key={p.slug}>
                                <button
                                  type="button"
                                  onClick={() => handlePracticeClick(p.slug)}
                                  className="group flex items-center text-[13px] font-sans-body text-foreground/80 hover:text-primary transition-colors w-full text-left"
                                >
                                  <span className="w-0 group-hover:w-3 mr-0 group-hover:mr-2 h-px bg-primary transition-all duration-300 shrink-0" />
                                  {getPracticeTitle(p, lang)}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.path}
                  className={`text-sm font-sans-body font-medium transition-colors duration-300 hover:text-primary ${
                    isActive(link.path) 
                      ? "text-primary border-b-2 border-primary pb-0.5" 
                      : (isTransparent ? "text-white" : "text-foreground")
                  }`}
                >
                  {t(`menu.${link.key}`)}
                </Link>
              )
            )}
          </nav>

          {/* NGÔN NGỮ DESKTOP */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang("vi")}
              className={`text-sm font-sans-body transition-colors duration-300 ${
                lang === "vi" ? "text-primary font-semibold" : (isTransparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")
              }`}
            >
              VN
            </button>
            <span className={`transition-colors duration-300 ${isTransparent ? "text-white/50" : "text-muted-foreground"}`}>|</span>
            <button
              onClick={() => setLang("en")}
              className={`text-sm font-sans-body transition-colors duration-300 ${
                lang === "en" ? "text-primary font-semibold" : (isTransparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* NÚT 3 GẠCH MOBILE */}
        <button 
          className={`lg:hidden transition-colors duration-300 ml-auto ${isTransparent ? "text-white" : "text-foreground"}`} 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU - GIAO DIỆN TINH TẾ */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-24 left-0 right-0 bg-white border-t border-gray-100 flex flex-col h-[calc(100vh-96px)] shadow-2xl z-40 animate-in slide-in-from-top-2 duration-300">
          
          <nav className="flex-1 overflow-y-auto px-[5%] py-4">
            {navLinks.map((link) => (
              <div key={link.key} className="border-b border-gray-100 last:border-0">
                {link.key === "practices" ? (
                  <>
                    <button 
                      onClick={() => setMobilePracticesOpen(!mobilePracticesOpen)}
                      className="flex items-center justify-between w-full py-5 text-base font-sans-body font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {t(`menu.${link.key}`)}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobilePracticesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* DANH SÁCH CON: THẲNG LỀ, CÓ GẠCH CHÂN KHI HOVER */}
                    {mobilePracticesOpen && (
                      <div className="flex flex-col gap-4 pb-6 animate-in fade-in duration-300">
                        {practices.map((p) => (
                          <button 
                            key={p.slug}
                            onClick={() => handlePracticeClick(p.slug)}
                            className="text-left w-full group"
                          >
                            <span className="inline-block text-[15px] font-sans-body text-muted-foreground group-hover:text-primary transition-colors border-b-2 border-transparent group-hover:border-primary pb-1">
                              {getPracticeTitle(p, lang)}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={link.path} 
                    onClick={() => {
                      setMobileOpen(false);
                      setMobilePracticesOpen(false);
                    }} 
                    className="block py-5 text-base font-sans-body font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {t(`menu.${link.key}`)}
                  </Link>
                )}
              </div>
            ))}

            {/* NGÔN NGỮ MOBILE - TINH TẾ, NHƯ BẢN WEB */}
            <div className="flex items-center gap-4 py-8 mt-4">
              <button
                onClick={() => { setLang("vi"); setMobileOpen(false); }}
                className={`text-base font-sans-body transition-colors duration-300 ${
                  lang === "vi" 
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                VN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => { setLang("en"); setMobileOpen(false); }}
                className={`text-base font-sans-body transition-colors duration-300 ${
                  lang === "en" 
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}