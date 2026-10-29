/**
 * Thêm ảnh bìa / logo tạp chí vào src/assets/press/ rồi import và gán vào `image`.
 * Khi chưa có ảnh, giao diện hiển thị khung placeholder với tên publication.
 */
export interface PressSlot {
  id: string;
  /** Optional cover image — import from @/assets/press/... when ready */
  image?: string;
}

export const pressSlots: PressSlot[] = [
  { id: "chambers" },
  { id: "legal500" },
  { id: "iflr" },
  { id: "asialaw" },
];
