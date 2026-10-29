export type PracticeNavColumn = "dispute" | "transactions" | "advisory";

export interface Practice {
  slug: string;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  /** Longer intro for detail page */
  body_vi: string;
  body_en: string;
  experience_vi: string;
  experience_en: string;
  services_vi: string[];
  services_en: string[];
  /** Optional profile slug under /people/:slug */
  leadSlug?: string;
  icon: string;
  navColumn: PracticeNavColumn;
}

export const practices: Practice[] = [
  {
    slug: "dispute-arbitration",
    title: "Giải quyết tranh chấp: Trọng tài",
    title_en: "Dispute Resolution: Arbitration",
    description: "Đại diện và tư vấn trong trọng tài VIAC, SIAC và các thể thức quốc tế.",
    description_en: "Counsel and representation in VIAC, SIAC, and international arbitration.",
    body_vi:
      "Nhóm Trọng tài của BDLAW đồng hành cùng khách hàng từ giai đoạn định hình chiến lược tranh chấp, lựa chọn thể thức và luật áp dụng, đến soạn thảo đơn kiện, tố tụng và thi hành phán quyết. Chúng tôi am hiểu cả góc nhìn pháp lý và thương mại trong các hợp đồng xây dựng, M&A và cung ứng dài hạn.",
    body_en:
      "Our arbitration team supports clients from dispute strategy and seat selection through pleadings, hearings, and award enforcement. We combine legal rigor with commercial judgment across construction, M&A, and long-term supply relationships.",
    experience_vi:
      "Nhiều vụ việc trước VIAC và các trung tâm trọng tài khu vực; phối hợp song song với tố tụng tòa án khi cần bảo toàn quyền lợi khách hàng.",
    experience_en:
      "Substantial experience before VIAC and regional arbitral institutions, coordinated with court proceedings where interim or parallel relief is required.",
    services_vi: [
      "Chiến lược tranh chấp và lựa chọn thể thức trọng tài",
      "Soạn thảo memorials, witness statements và cross-examination",
      "Hỗ trợ thương lượng, hòa giải trước và trong tố tụng",
      "Thi hành và phản đối phán quyết trọng tài",
    ],
    services_en: [
      "Dispute strategy and arbitral forum selection",
      "Memorials, witness statements, and hearing advocacy",
      "Settlement and mediation support before and during proceedings",
      "Award enforcement and set-aside proceedings",
    ],
    leadSlug: "tran-trong-binh",
    icon: "Scale",
    navColumn: "dispute",
  },
  {
    slug: "dispute-litigation",
    title: "Giải quyết tranh chấp: Tố tụng tòa án",
    title_en: "Dispute Resolution: Litigation",
    description: "Đại diện tranh tụng tại các cấp tòa án và cơ quan có thẩm quyền tại Việt Nam.",
    description_en: "Court litigation and representation before competent authorities in Vietnam.",
    body_vi:
      "Chúng tôi xử lý tranh chấp dân sự, thương mại và hành chính với phương pháp rõ ràng, tập trung vào kết quả thực tế cho doanh nghiệp. Đội ngũ phối hợp chặt giữa luật sư tranh tụng và cố vấn chuyên ngành để bảo vệ quyền lợi thân chủ tại mọi giai đoạn tố tụng.",
    body_en:
      "We handle civil, commercial, and administrative disputes with a disciplined, outcome-focused approach. Litigation lawyers work closely with subject-matter advisors to protect client interests at every stage of proceedings.",
    experience_vi:
      "Đại diện tại Tòa án nhân dân các cấp, Tòa Kinh tế và một số cơ quan chuyên ngành; kinh nghiệm phối hợp với luật sư nước ngoài trong vụ việc xuyên biên giới.",
    experience_en:
      "Representation before People’s Courts at multiple levels, economic courts, and selected regulators; coordination with foreign counsel on cross-border matters.",
    services_vi: [
      "Khởi kiện, phản tố và các biện pháp khẩn cấp tạm thời",
      "Thu thập chứng cứ, giám định và tố tụng tại phiên tòa",
      "Tranh tụng hành chính và khiếu nại quyết định cơ quan nhà nước",
      "Thi hành án và chiến lược tài sản bảo đảm",
    ],
    services_en: [
      "Claims, counterclaims, and interim relief",
      "Evidence, expert work, and trial advocacy",
      "Administrative litigation and state-action challenges",
      "Judgment enforcement and asset recovery strategy",
    ],
    leadSlug: "nguyen-thi-lan-anh",
    icon: "Gavel",
    navColumn: "dispute",
  },
  {
    slug: "corporate-ma",
    title: "Doanh nghiệp, Mua bán và Sáp nhập",
    title_en: "Corporate and M&A",
    description: "Cấu trúc giao dịch, thẩm định pháp lý và tích hợp sau M&A.",
    description_en: "Deal structuring, legal due diligence, and post-merger integration.",
    body_vi:
      "BDLAW tư vấn toàn diện cho các nhà đầu tư chiến lược và doanh nghiệp nội địa trong M&A, tái cấu trúc và góp vốn liên doanh. Chúng tôi đặt trọng tâm vào rủi ro pháp lý, phê duyệt cạnh tranh và các điều kiện tiên quyết đóng giao dịch.",
    body_en:
      "We advise strategic investors and domestic groups on M&A, restructurings, and joint ventures—with emphasis on legal risk, merger control, and conditions precedent to closing.",
    experience_vi:
      "Tham gia nhiều giao dịch mua lại cổ phần/tài sản, sáp nhập doanh nghiệp và đầu tư chéo giữa đối tác trong nước và quốc tế.",
    experience_en:
      "Experience across share and asset deals, mergers, and cross-border investments involving Vietnamese and international counterparties.",
    services_vi: [
      "Thiết kế cấu trúc giao dịch và phương án thanh toán",
      "Thẩm định pháp lý toàn diện (legal due diligence)",
      "Soạn thảo SPA, SSA và các thỏa thuận cổ đông",
      "Hỗ trợ điều kiện tiên quyết, đóng giao dịch và tích hợp",
    ],
    services_en: [
      "Transaction structuring and consideration mechanics",
      "Full-scope legal due diligence",
      "SPA/SSA and shareholders’ agreements",
      "CPs, closing, and integration support",
    ],
    leadSlug: "nguyen-thanh-ha",
    icon: "Building2",
    navColumn: "transactions",
  },
  {
    slug: "banking-finance",
    title: "Tài chính và Ngân hàng",
    title_en: "Banking and finance",
    description: "Tín dụng, bảo lãnh, tài trợ dự án và tuân thủ ngành.",
    description_en: "Lending, guarantees, project finance, and regulatory compliance.",
    body_vi:
      "Chúng tôi hỗ trợ ngân hàng, tổ chức tài chính và người vay trong các giao dịch tín dụng phức tạp, bảo đảm và tài trợ có tài sản đảm bảo. Tư vấn gắn liền với thực tiễn giám sát của Ngân hàng Nhà nước và yêu cầu của bên cho vay quốc tế.",
    body_en:
      "We assist banks, financial institutions, and borrowers on secured lending, guarantees, and structured finance. Our advice reflects State Bank supervision and international lender expectations.",
    experience_vi:
      "Tư vấn cho các khoản vay syndicated, tài trợ BĐS và bảo lãnh thực hiện hợp đồng trong dự án hạ tầng và công nghiệp.",
    experience_en:
      "Work on syndicated facilities, real estate finance, and performance guarantees in infrastructure and industrial projects.",
    services_vi: [
      "Soạn thảo và đàm phán hợp đồng tín dụng, bảo lãnh",
      "Bảo đảm tiền vay, thế chấp, cầm cố đa lớp",
      "Tuân thủ pháp lý ngân hàng và phê duyệt nội bộ",
      "Tái cấu trúc nợ và workout",
    ],
    services_en: [
      "Facility and guarantee documentation and negotiation",
      "Security packages: mortgages, pledges, and layered structures",
      "Banking regulatory and internal approval alignment",
      "Restructuring and workout",
    ],
    leadSlug: "nguyen-thanh-ha",
    icon: "Landmark",
    navColumn: "transactions",
  },
  {
    slug: "capital-markets",
    title: "Thị trường vốn",
    title_en: "Capital markets",
    description: "Niêm yết, phát hành chứng khoán và công bố thông tin.",
    description_en: "Listings, securities offerings, and ongoing disclosure.",
    body_vi:
      "Nhóm Thị trường vốn hỗ trợ doanh nghiệp và nhà đầu tư chứng khoán trong các giao dịch chào bán, niêm yết và tuân thủ công bố thông tin. Chúng tôi làm việc song song với cố vấn tài chính và kiểm toán để đáp ứng chuẩn mực thị trường.",
    body_en:
      "Our capital markets practice supports issuers and investors on offerings, listings, and continuous disclosure. We coordinate with financial and audit advisors to meet market standards.",
    experience_vi:
      "Tư vấn các đợt chào bán ra công chúng và riêng lẻ, chuyển đổi loại hình doanh nghiệp chuẩn bị niêm yết.",
    experience_en:
      "Advisory on public and private placements and pre-IPO corporate conversions.",
    services_vi: [
      "Tư vấn pháp lý phát hành và niêm yết",
      "Hồ sơ công bố thông tin và quản trị niêm yết",
      "Giao dịch người nội bộ và công bố liên quan",
      "Hợp tác với UBCKNN và Sở giao dịch",
    ],
    services_en: [
      "Issuance and listing legal advisory",
      "Disclosure documentation and listed-company governance",
      "Insider dealing and related-party transparency",
      "Interface with SSC and exchanges",
    ],
    leadSlug: "nguyen-thanh-ha",
    icon: "TrendingUp",
    navColumn: "transactions",
  },
  {
    slug: "real-estate-construction",
    title: "Bất động sản và Xây dựng",
    title_en: "Real estate & Construction",
    description: "Dự án BĐS, FIDIC, hợp đồng thi công và tranh chấp dự án.",
    description_en: "Real estate projects, FIDIC, construction contracts, and project disputes.",
    body_vi:
      "Chúng tôi đồng hành chủ đầu tư, nhà thầu và nhà phát triển trong toàn vòng đời dự án: đất đai, quy hoạch, hợp đồng EPC/FIDIC, bàn giao và vận hành. Khi phát sinh tranh chấp, đội ngũ phối hợp tranh tụng và trọng tài.",
    body_en:
      "We advise developers, contractors, and sponsors across the project lifecycle—land use, planning, EPC/FIDIC contracting, handover, and operations. Disputes are handled with integrated litigation and arbitration support.",
    experience_vi:
      "Tư vấn dự án khu đô thị, cao ốc văn phòng và hạ tầng kỹ thuật; hỗ trợ đàm phán và giải quyết tranh chấp hợp đồng xây dựng.",
    experience_en:
      "Urban developments, office towers, and technical infrastructure; negotiation and dispute resolution on construction contracts.",
    services_vi: [
      "Cấu trúc đầu tư và hợp đồng mua bán, chuyển nhượng dự án",
      "Soạn thảo và đàm phán FIDIC, EPC, hợp đồng thi công",
      "Giấy phép xây dựng, nghiệm thu và bàn giao",
      "Tranh chấp dự án và yêu cầu bồi thường",
    ],
    services_en: [
      "Investment structuring and project sale or transfer",
      "FIDIC/EPC and construction contract drafting",
      "Permitting, completion, and handover",
      "Project disputes and damages claims",
    ],
    leadSlug: "tran-trong-binh",
    icon: "HardHat",
    navColumn: "transactions",
  },
  {
    slug: "projects-energy",
    title: "Dự án và Năng lượng",
    title_en: "Projects and energy",
    description: "PPP, điện, năng lượng tái tạo và hợp đồng dự án.",
    description_en: "PPP, power, renewables, and project contracting.",
    body_vi:
      "BDLAW tư vấn các dự án hạ tầng và năng lượng với cấu trúc phức tạp, liên quan nhiều bên và nguồn vốn. Chúng tôi tập trung vào phân bổ rủi ro, điều chỉnh giá/khối lượng và tuân thủ điều ước quốc tế khi có.",
    body_en:
      "We advise on complex infrastructure and energy projects involving multiple stakeholders and financing sources—with attention to risk allocation, change mechanisms, and treaty issues where relevant.",
    experience_vi:
      "Hỗ trợ nhà đầu tư và chủ dự án trong điện gió, mặt trời và hợp đồng mua bán điện; tư vấn gói thầu và điều khoản bảo lãnh.",
    experience_en:
      "Investor and sponsor support on wind, solar, and power purchase arrangements; procurement and guarantee structures.",
    services_vi: [
      "Cấu trúc dự án BOT/PPP và hợp đồng mua bán điện",
      "Đấu thầu, EPC và O&M",
      "Tài trợ dự án và bảo lãnh nhà nước",
      "Tuân thủ năng lượng và môi trường",
    ],
    services_en: [
      "BOT/PPP structures and PPAs",
      "EPC procurement and O&M",
      "Project finance and sovereign support instruments",
      "Energy and environmental compliance",
    ],
    leadSlug: "tran-trong-binh",
    icon: "Zap",
    navColumn: "transactions",
  },
  {
    slug: "data-protection",
    title: "Bảo vệ dữ liệu",
    title_en: "Data protection",
    description: "Tuân thủ bảo vệ dữ liệu cá nhân, chuyển dữ liệu xuyên biên giới.",
    description_en: "Personal data compliance and cross-border data transfers.",
    body_vi:
      "Chúng tôi giúp doanh nghiệp xây dựng khung tuân thủ phù hợp Luật Bảo vệ dữ liệu cá nhân và thông lệ quốc tế. Tư vấn gắn với vận hành thực tế: hợp đồng xử lý dữ liệu, DPIA và phản hồi yêu cầu cơ quan quản lý.",
    body_en:
      "We help organizations align with Vietnam’s personal data protection framework and international expectations—covering DPAs, DPIAs, and regulatory engagement in a practical way.",
    experience_vi:
      "Rà soát và thiết kế chính sách nội bộ cho FDI, ngân hàng và nền tảng số; hỗ trợ đánh giá tác động khi triển khai sản phẩm mới.",
    experience_en:
      "Policy design and audits for FDI, banking, and digital platforms; impact assessments for new product rollouts.",
    services_vi: [
      "Khung tuân thủ và chính sách nội bộ",
      "Hợp đồng xử lý dữ liệu và điều khoản bảo mật",
      "Chuyển dữ liệu ra nước ngoài và hồ sơ báo cáo",
      "Đào tạo và ứng phó sự cố",
    ],
    services_en: [
      "Compliance frameworks and internal policies",
      "Data processing agreements and confidentiality",
      "Cross-border transfers and filings",
      "Training and incident response",
    ],
    leadSlug: "dang-thu-ha",
    icon: "Shield",
    navColumn: "advisory",
  },
  {
    slug: "intellectual-property",
    title: "Sở hữu trí tuệ",
    title_en: "Intellectual property",
    description: "Đăng ký nhãn hiệu, bản quyền, cấp phép và tranh chấp SHTT.",
    description_en: "Trademarks, copyright, licensing, and IP disputes.",
    body_vi:
      "Nhóm SHTT hỗ trợ bảo vệ và khai thác tài sản trí tuệ trong kinh doanh: đăng ký, cấp phép, chuyển giao và tranh chấp. Chúng tôi phối hợp với đại diện sở hữu công nghiệp khi cần.",
    body_en:
      "We protect and commercialize IP assets—registration, licensing, transfers, and disputes—working with industrial property agents where appropriate.",
    experience_vi:
      "Đăng ký và tranh tụng nhãn hiệu; tư vấn bản quyền phần mềm và nội dung số; hợp đồng franchise và nhượng quyền.",
    experience_en:
      "Trademark prosecution and disputes; software and digital content; franchise and licensing arrangements.",
    services_vi: [
      "Đăng ký nhãn hiệu, kiểu dáng công nghiệp",
      "Cấp phép, chuyển giao và due diligence SHTT",
      "Xử lý xâm phạm và hàng giả",
      "Hợp đồng R&D và bảo mật thông tin",
    ],
    services_en: [
      "Trademark and industrial design filings",
      "Licensing, assignments, and IP due diligence",
      "Enforcement and anti-counterfeiting",
      "R&D agreements and confidentiality",
    ],
    leadSlug: "duong-huong-que",
    icon: "Lightbulb",
    navColumn: "advisory",
  },
  {
    slug: "tax",
    title: "Thuế",
    title_en: "Tax",
    description: "Tư vấn thuế doanh nghiệp, giao dịch liên kết và kiểm tra thuế.",
    description_en: "Corporate tax, transfer pricing, and tax audits.",
    body_vi:
      "Chúng tôi hỗ trợ cấu trúc giao dịch thuế hiệu quả, hồ sơ giao dịch liên kết và ứng phó thanh tra. Làm việc cùng chuyên gia thuế khi cần cho các vụ việc đa pháp nhân.",
    body_en:
      "We support tax-efficient structuring, transfer pricing documentation, and audit defense—coordinating with tax specialists for multi-jurisdictional issues.",
    experience_vi:
      "Tư vấn tái cấu trúc và M&A có yếu tố thuế; hỗ trợ doanh nghiệp FDI trong kỳ kiểm tra sau thanh tra.",
    experience_en:
      "Tax aspects of restructurings and M&A; FDI clients in post-audit phases.",
    services_vi: [
      "Tư vấn thuế doanh nghiệp và đầu tư",
      "Hồ sơ giao dịch liên kết và định giá",
      "Ứng phó kiểm tra, thanh tra thuế",
      "Ưu đãi đầu tư và hoàn thuế",
    ],
    services_en: [
      "Corporate and investment tax advisory",
      "Transfer pricing files and benchmarking",
      "Tax audit and inspection response",
      "Incentives and refund strategy",
    ],
    leadSlug: "dang-thu-ha",
    icon: "Receipt",
    navColumn: "advisory",
  },
  {
    slug: "labour-employment",
    title: "Lao động và Việc làm",
    title_en: "Labour and employment",
    description: "Hợp đồng lao động, quy chế nội bộ và tranh chấp lao động.",
    description_en: "Employment contracts, policies, and labor disputes.",
    body_vi:
      "BDLAW tư vấn cho nhà quản trị trong suốt vòng đời nhân sự: tuyển dụng, thay đổi cơ cấu, chấm dứt hợp đồng và tranh chấp. Chúng tôi cân bằng tuân thủ pháp luật với vận hành thực tế của doanh nghiệp.",
    body_en:
      "We advise HR and management across hiring, restructuring, terminations, and disputes—balancing legal compliance with operational reality.",
    experience_vi:
      "Soạn thảo quy chế, xử lý sa thải hàng loạt và đại diện trong tranh chấp lao động cá nhân và tập thể.",
    experience_en:
      "Handbook drafting, collective redundancies, and individual and collective labor disputes.",
    services_vi: [
      "Hợp đồng lao động và thỏa ước",
      "Quy chế lương, thưởng, kỷ luật lao động",
      "Chấm dứt hợp đồng và bồi thường",
      "Tranh chấp tại Hòa giải lao động và Tòa án",
    ],
    services_en: [
      "Employment contracts and collective agreements",
      "Compensation, bonus, and discipline policies",
      "Terminations and severance",
      "Labor mediation and court disputes",
    ],
    leadSlug: "cao-minh-truc",
    icon: "Briefcase",
    navColumn: "advisory",
  },
  {
    slug: "insurance",
    title: "Bảo hiểm",
    title_en: "Insurance",
    description: "Tư vấn hợp đồng bảo hiểm, bồi thường và tuân thủ.",
    description_en: "Insurance contracts, claims, and regulatory compliance.",
    body_vi:
      "Chúng tôi hỗ trợ doanh nghiệp và nhà bảo hiểm trong cấu trúc bảo hiểm tài sản, trách nhiệm và các gói bảo hiểm chuyên ngành. Tư vấn khi phát sinh tranh chấp bồi thường và giải thích điều khoản loại trừ.",
    body_en:
      "We assist corporates and insurers on property, liability, and specialty programs—with support on coverage disputes and exclusion analysis.",
    experience_vi:
      "Rà soát điều khoản bảo hiểm trong dự án xây dựng và logistics; hỗ trợ thương lượng bồi thường.",
    experience_en:
      "Policy reviews in construction and logistics; claims negotiation support.",
    services_vi: [
      "Soạn thảo và đàm phán hợp đồng bảo hiểm",
      "Tư vấn bồi thường và tranh chấp với nhà bảo hiểm",
      "Tuân thủ pháp lý ngành bảo hiểm",
      "Bảo hiểm M&A và trách nhiệm doanh nghiệp",
    ],
    services_en: [
      "Insurance programme drafting and negotiation",
      "Claims and insurer disputes",
      "Insurance regulatory compliance",
      "M&A and corporate liability coverage",
    ],
    leadSlug: "nguyen-thanh-ha",
    icon: "Umbrella",
    navColumn: "advisory",
  },
];

export function practicesByNavColumn(column: PracticeNavColumn): Practice[] {
  return practices.filter((p) => p.navColumn === column);
}

export function getPracticeTitle(p: Practice, lang: string) {
  return lang === "vi" ? p.title : p.title_en;
}

export function getPracticeDesc(p: Practice, lang: string) {
  return lang === "vi" ? p.description : p.description_en;
}
