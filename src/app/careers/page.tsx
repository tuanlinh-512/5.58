import type { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at BDLAW — join our team in Vietnam.",
};

export default function CareersPage() {
  return <CareersClient />;
}
