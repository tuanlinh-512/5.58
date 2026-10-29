export type InsightStream = "news" | "legal-updates";

export interface Insight {
  slug: string;
  stream: InsightStream;
  category: string;
  category_en: string;
  title: string;
  title_en: string;
  author: string;
  /** Display date (short) */
  date: string;
  /** ISO YYYY-MM-DD for sorting */
  publishedAt: string;
  image: string;
}

function ins(
  stream: InsightStream,
  slug: string,
  publishedAt: string,
  date: string,
  category: string,
  category_en: string,
  title: string,
  title_en: string,
  author: string
): Insight {
  return { stream, slug, publishedAt, date, category, category_en, title, title_en, author, image: "" };
}

export const newsInsights: Insight[] = [
  ins("news", "firm-chambers-asialaw-2026", "2026-03-12", "12.03.2026", "TIN HÃNG", "FIRM NEWS", "BDLAW được ghi nhận trong các bảng xếp hạng pháp lý quốc tế 2026", "BDLAW recognised in 2026 international legal rankings", "BDLAW Communications"),
  ins("news", "partner-speaks-vietnam-infra-week", "2026-03-02", "02.03.2026", "SỰ KIỆN", "EVENTS", "Đối tác BDLAW tham luận tại Vietnam Infrastructure Week", "BDLAW partner speaks at Vietnam Infrastructure Week", "Le Viet Anh"),
  ins("news", "hcmc-team-welcome-associates", "2026-02-18", "18.02.2026", "ĐỘI NGŨ", "PEOPLE", "BDLAW TP.HCM chào đón luật sư thành viên mới", "BDLAW HCMC welcomes new associates", "BDLAW HCMC"),
  ins("news", "client-briefing-fdi-2026", "2026-02-05", "05.02.2026", "HỘI THẢO", "BRIEFINGS", "Tóm tắt hội thảo khách hàng: FDI và điều chỉnh chính sách 2026", "Client briefing recap: FDI and policy shifts in 2026", "Tran Minh Quan"),
  ins("news", "pro-bono-clinic-launch", "2026-01-22", "22.01.2026", "CỘNG ĐỒNG", "COMMUNITY", "BDLAW mở chuỗi tư vấn pháp lý miễn phí định kỳ", "BDLAW launches periodic pro bono legal clinics", "BDLAW CSR"),
  ins("news", "knowledge-hub-redesign", "2026-01-08", "08.01.2026", "TIN HÃNG", "FIRM NEWS", "Cập nhật giao diện kho tri thức và insights trực tuyến", "Knowledge hub and online insights refresh", "BDLAW Communications"),
  ins("news", "year-end-message-2025", "2025-12-15", "15.12.2025", "THÔNG ĐIỆP", "MESSAGE", "Thông điệp cuối năm từ Ban lãnh đạo BDLAW", "Year-end message from BDLAW leadership", "Managing Partner Office"),
  ins("news", "alumni-network-meetup", "2025-12-01", "01.12.2025", "CỘNG ĐỒNG", "COMMUNITY", "Gặp gỡ mạng lưới cựu thực tập sinh và luật sư BDLAW", "BDLAW alumni and former interns networking evening", "BDLAW HR"),
  ins("news", "international-firm-delegation", "2025-11-18", "18.11.2025", "HỢP TÁC", "COOPERATION", "Tiếp đoàn hãng luật quốc tế thăm văn phòng Hà Nội", "International law firm delegation visits Hanoi office", "BDLAW Hanoi"),
  ins("news", "esg-seminar-series", "2025-11-03", "03.11.2025", "SỰ KIỆN", "EVENTS", "Chuỗi hội thảo ngắn về ESG và tuân thủ tại Việt Nam", "Short seminar series on ESG and compliance in Vietnam", "Tran Minh Quan"),
  ins("news", "women-in-law-panel", "2025-10-20", "20.10.2025", "SỰ KIỆN", "EVENTS", "Panel: Nữ luật sư và lãnh đạo pháp lý doanh nghiệp", "Panel: Women lawyers and in-house legal leadership", "BDLAW Diversity"),
  ins("news", "university-moot-partnership", "2025-10-07", "07.10.2025", "GIÁO DỤC", "EDUCATION", "BDLAW đồng hành giải tranh tụng giả định sinh viên", "BDLAW sponsors university moot competition", "BDLAW HR"),
  ins("news", "office-renewal-pacific-place", "2025-09-22", "22.09.2025", "TIN HÃNG", "FIRM NEWS", "Gia hạn và mở rộng không gian làm việc tại Pacific Place", "Pacific Place workspace renewal and expansion", "BDLAW Operations"),
  ins("news", "summer-internship-opens", "2025-09-08", "08.09.2025", "TUYỂN DỤNG", "RECRUITING", "Mở đợt nhận hồ sơ thực tập sinh mùa hè", "Summer internship application window opens", "BDLAW HR"),
];

/** @deprecated Use `newsInsights` — legal updates live in Markdown under `src/data/posts/`. */
export const insights: Insight[] = newsInsights;

/** Client-safe: only returns news. Legal-updates list must be loaded on the server via `@/lib/posts`. */
export function insightsByStream(stream: InsightStream): Insight[] {
  if (stream !== "news") return [];
  return [...newsInsights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function insightBySlug(slug: string): Insight | undefined {
  return newsInsights.find((i) => i.slug === slug);
}
