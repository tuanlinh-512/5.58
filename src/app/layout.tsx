import type { Metadata } from "next";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BDLAW - Premier Commercial Law Firm in Vietnam",
    template: "%s | BDLAW",
  },
  description:
    "BDLAW is a premier commercial law firm in Vietnam delivering strategic legal solutions for multinational corporations and leading enterprises.",
  authors: [{ name: "BDLAW" }],
  openGraph: {
    title: "BDLAW - Premier Commercial Law Firm in Vietnam",
    description:
      "Strategic legal solutions for multinational corporations. Dispute Resolution, Corporate & M&A, Real Estate, FDI advisory.",
    type: "website",
    url: "https://bdlaw.com.vn",
    images: [{ url: "https://bdlaw.com.vn/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bdlawvn",
    images: ["https://bdlaw.com.vn/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
