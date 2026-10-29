"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import vi from "@/locales/vi.json";
import en from "@/locales/en.json";

type Lang = "vi" | "en";
const dictionaries = { vi, en } as const;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let val: unknown = dictionaries[lang];
      for (const k of keys) {
        if (val && typeof val === "object") val = (val as Record<string, unknown>)[k];
        else return key;
      }
      return typeof val === "string" ? val : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
