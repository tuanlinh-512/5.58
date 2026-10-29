"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroImageBackdrop } from "@/components/HeroImageBackdrop";
import ContactLink from "@/components/ContactLink";
import { ArrowRight, Clock, Plus } from "lucide-react";

const hiringUpdates = [
  {
    title: "Opening: Senior Associate – Dispute Resolution & International Arbitration",
    location: "Hanoi Office",
    date: "24.03.2026",
    category: "Legal Professional",
    slug: "senior-associate-dispute-resolution",
  },
  {
    title: "Call for Applications: 2026 Summer Internship Program",
    location: "Hanoi & HCMC",
    date: "15.03.2026",
    category: "Students",
    slug: "summer-internship-program-2026",
  },
  {
    title: "BDLAW is looking for Junior Associate (Corporate & M&A)",
    location: "Hanoi Office",
    date: "02.03.2026",
    category: "Legal Professional",
    slug: "junior-associate-corporate-ma",
  },
  {
    title: "Opening: Mid-level Associate – Intellectual Property",
    location: "Ho Chi Minh City",
    date: "20.02.2026",
    category: "Legal Professional",
    slug: "mid-level-associate-ip",
  },
];

export default function CareersClient() {
  const { lang } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(3);

  const coreValues = [
    {
      title: lang === "vi" ? "Thực tiễn Đỉnh cao" : "Top-Tier Practice",
      desc:
        lang === "vi"
          ? "Tham gia vào các giao dịch M&A phức tạp và các vụ kiện tụng quy mô lớn, làm việc trực tiếp với những tập đoàn hàng đầu."
          : "Engage in complex M&A transactions and high-stakes litigation, working directly with industry-leading corporations.",
    },
    {
      title: lang === "vi" ? "Định hướng & Kế thừa" : "Mentorship & Legacy",
      desc:
        lang === "vi"
          ? "Môi trường học tập không ngừng. Các Luật sư thành viên (Partners) luôn trực tiếp dẫn dắt và định hướng lộ trình cho từng cá nhân."
          : "A culture of continuous learning. Our Partners are deeply invested in mentoring and guiding your individual career path.",
    },
    {
      title: lang === "vi" ? "Linh hoạt & Cởi mở" : "Agile & Inclusive",
      desc:
        lang === "vi"
          ? "Chúng tôi đánh giá cao kết quả thực tế và tư duy đột phá hơn là sự cứng nhắc. Một môi trường tôn trọng sự đa dạng."
          : "We value actual results and breakthrough thinking over rigid hierarchy. An environment that respects diversity.",
    },
  ];

  return (
    <main className="bg-white">
      <HeroImageBackdrop
        src=""
        alt=""
        className="min-h-[220px] flex items-center justify-center"
      >
        <div className="relative max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="pt-24">
            <h1 className="text-3xl lg:text-4xl font-sans-body font-semibold text-white mb-4 tracking-tight">
              {lang === "vi" ? "Tuyển dụng" : "Careers"}
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
        </div>
      </HeroImageBackdrop>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 lg:pt-28 mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {lang === "vi" ? "Tại sao chọn BDLAW" : "Why BDLAW"}
          </h2>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {coreValues.map((val, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-lg font-sans-body font-bold text-slate-900 mb-4">{val.title}</h3>
              <p className="text-sm font-sans-body text-slate-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24 mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-4">
              {lang === "vi" ? "Phát triển nhân tài" : "Talent development"}
            </p>
            <h2 className="text-2xl lg:text-3xl font-sans-body font-semibold text-slate-900 mb-6 leading-tight">
              {lang === "vi" ? "Chương trình Thực tập sinh" : "Internship Program"}
            </h2>
            <div className="w-10 h-px bg-primary"></div>
            <div
              className="mt-10 aspect-[4/3] border border-slate-200 bg-slate-950"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(520px circle at 22% 38%, rgba(128,0,0,0.34), transparent 60%), radial-gradient(420px circle at 78% 30%, rgba(255,255,255,0.10), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.92), rgba(2,6,23,0.72))",
              }}
            >
              <div
                className="h-full w-full opacity-[0.10]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 12px)",
                }}
              />
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-6">
            <p className="text-sm lg:text-base font-sans-body text-slate-600 leading-relaxed">
              {lang === "vi"
                ? "Chúng tôi xem Thực tập sinh là thế hệ lãnh đạo tương lai của BDLAW. Tại đây, bạn không làm những công việc hành chính vặt vãnh. Bạn sẽ được tham gia sâu vào các vụ việc thực tế, tham dự các buổi họp khách hàng, và được đào tạo trực tiếp bởi các Luật sư cấp cao."
                : "We view Interns as the future leaders of BDLAW. Here, you won't be doing trivial administrative tasks. You will be deeply involved in real cases, attend client meetings, and receive direct training from Senior Associates."}
            </p>
            <p className="text-sm font-sans-body text-slate-500 leading-relaxed italic">
              {lang === "vi"
                ? "*Chương trình thường mở đơn ứng tuyển vào Quý 1 và Quý 3 hàng năm. Những sinh viên xuất sắc sẽ được trao cơ hội trở thành Trợ lý Luật sư (Paralegal) chính thức sau khi tốt nghiệp."
                : "*The program typically opens for applications in Q1 and Q3 annually. Outstanding students will be offered the opportunity to become full-time Paralegals upon graduation."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {lang === "vi" ? "Cập nhật Tuyển dụng" : "Hiring Updates"}
          </h2>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        <div className="flex flex-col">
          {hiringUpdates.slice(0, visibleCount).map((post) => (
            <Link
              key={post.slug}
              href={`/careers/${post.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-slate-100 transition-all hover:bg-white px-4 -mx-4"
            >
              <div className="md:col-span-9 flex flex-col gap-3 max-w-3xl">
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="text-primary/60">{post.category}</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-sans-body font-medium text-slate-900 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <span className="text-[12px] text-slate-500 font-medium italic">{post.location}</span>
              </div>

              <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3 text-primary self-start md:self-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/20 group-hover:border-primary/60 transition-colors">
                  {lang === "vi" ? "Chi tiết" : "Details"}
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < hiringUpdates.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 3)}
              className="group flex items-center gap-3 px-8 py-4 border border-slate-200 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Plus className="w-3.5 h-3.5 transition-transform group-hover:rotate-90" />
              {lang === "vi" ? "Xem thêm bài đăng" : "Load more updates"}
            </button>
          </div>
        )}

        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-sm font-sans-body text-slate-500 max-w-xl leading-relaxed">
            {lang === "vi"
              ? "Chúng tôi luôn chào đón những tài năng pháp lý xuất sắc gia nhập đội ngũ BDLAW. Ngay cả khi chưa có vị trí phù hợp được đăng tải, hãy tự tin gửi hồ sơ của bạn cho chúng tôi."
              : "We always welcome exceptional legal talents to join the BDLAW team. Even if no current openings match your profile, we encourage you to submit your application."}
          </p>
          <ContactLink
            encoded="cmVjcnVpdG1lbnRAYmRsYXcuY29tLnZu"
            type="email"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-primary/90 transition-all duration-300 flex-shrink-0"
          >
            {lang === "vi" ? "Ứng tuyển" : "Apply"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </ContactLink>
        </div>
      </section>
    </main>
  );
}
