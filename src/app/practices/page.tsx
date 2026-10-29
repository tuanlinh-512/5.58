import type { Metadata } from "next";
import PracticesClient from "./practices-client";

export const metadata: Metadata = {
  title: "Practices",
  description: "BDLAW practice areas — dispute resolution, corporate & M&A, banking, real estate, and more.",
};

export default function PracticesPage() {
  return <PracticesClient />;
}
