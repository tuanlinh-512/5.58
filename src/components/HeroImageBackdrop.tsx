"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  sizes?: string;
  priority?: boolean;
  children: ReactNode;
};

export function HeroImageBackdrop({
  src,
  alt,
  className = "",
  imageClassName = "object-cover object-center",
  overlayClassName = "absolute inset-0 bg-slate-950/55",
  sizes = "100vw",
  priority,
  children,
}: Props) {
  const bg = src && src.trim().length > 0 ? src : "";
  return (
    <div
      className={`relative w-full overflow-hidden border-b border-slate-200 bg-slate-950 ${className}`}
      style={
        !bg
          ? {
              backgroundImage:
                "radial-gradient(900px circle at 25% 30%, rgba(128,0,0,0.28), transparent 60%), radial-gradient(700px circle at 75% 20%, rgba(255,255,255,0.10), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.92), rgba(2,6,23,0.72))",
            }
          : undefined
      }
    >
      {bg ? <Image src={bg} alt={alt} fill className={imageClassName} sizes={sizes} priority={priority} /> : null}
      {overlayClassName ? <div className={overlayClassName} aria-hidden /> : null}
      {!bg ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 12px)",
          }}
        />
      ) : null}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
