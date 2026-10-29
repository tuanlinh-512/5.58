import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BDLAW privacy statement and zero-storage web model.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 text-center">
          <h1 className="text-3xl lg:text-4xl font-sans-body font-bold tracking-tight text-slate-900">Privacy Policy</h1>
          <div className="w-2/3 max-w-[14rem] h-0.5 bg-primary mx-auto mt-4" />
          <p className="mt-6 text-sm lg:text-base font-sans-body text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Minimal, professional, and security-first policy for BDLAW web presence.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="space-y-8 text-sm lg:text-base font-sans-body text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Zero-Storage Model</h2>
            <p>
              This website follows a <strong>Zero-Storage</strong> model: we do not store customer submissions, contact
              records, or user profiles in any database on the website itself. The site is static-first and contains no
              backend persistence layer.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Layered Contact Protection</h2>
            <p>
              Contact channels for lawyers and offices are protected with layered obfuscation. Email addresses and phone
              numbers are not rendered as plaintext in HTML; they are decoded only on user interaction.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">3. No Tracking Database</h2>
            <p>
              We do not run a user-tracking database or a marketing profile engine on this website. Any analytics, if
              enabled, is limited and non-identifying.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">4. Content Publication</h2>
            <p>
              Professional profiles and legal insights are published from Markdown sources and statically generated for
              integrity and transparency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
