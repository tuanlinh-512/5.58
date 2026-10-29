export interface Office {
  city: string;
  city_en: string;
  /** Card title on contact page, e.g. "Hanoi Office" */
  heading_en: string;
  heading_vi: string;
  address: string;
  address_en: string;
  phone: string;
  email: string;
  mapUrl: string;
  image: string;
}

export const offices: Office[] = [
  {
    city: "Hà Nội",
    city_en: "Hanoi",
    heading_en: "Hanoi Office",
    heading_vi: "Văn phòng Hà Nội",
    address: "Tầng 15, Tòa nhà Pacific Place, 83B Lý Thường Kiệt, Q. Hoàn Kiếm, Hà Nội",
    address_en: "15th Floor, Pacific Place Building, 83B Ly Thuong Kiet St., Hoan Kiem Dist., Hanoi",
    phone: "+84 24 3888 9999",
    email: "hanoi@bdlaw.com.vn",
    mapUrl: "https://maps.google.com/?q=Pacific+Place+Hanoi",
    image: "/assets/office-hanoi.jpg",
  },
  {
    city: "TP. Hồ Chí Minh",
    city_en: "Ho Chi Minh City",
    heading_en: "Ho Chi Minh City Office",
    heading_vi: "Văn phòng TP. Hồ Chí Minh",
    address: "Tầng 20, Tòa nhà Bitexco Financial Tower, 2 Hải Triều, Q.1, TP.HCM",
    address_en: "20th Floor, Bitexco Financial Tower, 2 Hai Trieu St., Dist. 1, HCMC",
    phone: "+84 28 3823 6888",
    email: "hcmc@bdlaw.com.vn",
    mapUrl: "https://maps.google.com/?q=Bitexco+Financial+Tower",
    image: "/assets/office-hcmc.jpg",
  },
];
