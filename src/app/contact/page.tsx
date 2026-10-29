import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact BDLAW offices in Hanoi and Ho Chi Minh City.",
};

export default function ContactPage() {
  return <ContactClient />;
}
