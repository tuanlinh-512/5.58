"use client";

import type { MouseEvent, ReactNode } from "react";

type ContactKind = "email" | "phone";

type Props = {
  encoded: string;
  type: ContactKind;
  className?: string;
  children: ReactNode;
};

/**
 * Keep real contact data out of rendered HTML:
 * decode base64 only at click time, then navigate to mailto:/tel:.
 */
export default function ContactLink({ encoded, type, className, children }: Props) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const decoded = atob(encoded);
      const href = type === "email" ? `mailto:${decoded}` : `tel:${decoded}`;
      window.location.href = href;
    } catch {
      // Swallow invalid base64 safely.
    }
  };

  return (
    <a href="#" onClick={onClick} className={className}>
      {children}
    </a>
  );
}
