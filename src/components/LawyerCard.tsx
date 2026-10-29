"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Professional, getName, getTitle } from "@/data/professionals";

function initials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

interface LawyerCardProps {
  professional: Professional;
}

export default function LawyerCard({ professional }: LawyerCardProps) {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const src = professional.image?.startsWith("/") ? professional.image : `/${professional.image}`;

  return (
    <Link 
      href={`/people/${professional.slug}`} 
      // Hiệu ứng Nhấc bổng cả khung lên 8px khi di chuột
      className="group block transition-transform duration-500 ease-out hover:-translate-y-2"
    >
      {/* KHUNG ẢNH: Bo nhẹ góc 4px, Shadow rõ hơn khi hover */}
      <div className="aspect-[3/4] relative bg-muted overflow-hidden rounded-[4px] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
        {/* ĐOẠN SỬA QUAN TRỌNG: Kiểm tra xem có ảnh (image) trong data không */}
        {professional.image && !imgError ? (
          <Image
            src={src}
            alt={getName(professional, lang)}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 280px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1f2328]">
            <div
              className="absolute inset-0 opacity-[0.14]"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(360px circle at 25% 35%, rgba(128,0,0,0.35), transparent 60%), repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 12px)",
              }}
            />
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-white/15 bg-white/10 text-lg font-bold tracking-widest text-white/85">
                {initials(getName(professional, lang))}
              </div>
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">BDLAW</div>
            </div>
          </div>
        )}
      </div>

      {/* PHẦN CHỮ: Căn trái, Font không chân (Sans-serif) 100% */}
      <div className="space-y-1.5 text-left">
        <h3 className="text-[16px] font-sans-body font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
          {getName(professional, lang)}
        </h3>
        <div className="space-y-0.5">
          <p className="text-[13px] font-sans-body font-medium text-primary uppercase tracking-wide">
            {getTitle(professional, lang)}
          </p>
          <p className="text-[12px] font-sans-body text-muted-foreground uppercase font-light">
            {professional.office}
          </p>
        </div>
      </div>
    </Link>
  );
}