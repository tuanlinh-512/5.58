import type { Metadata } from "next";
import { getLegalUpdatesInsights } from "@/lib/posts";
import InsightsStreamClient from "../insights-stream-client";

export const metadata: Metadata = {
  title: "Legal updates",
  description: "Legal updates and analysis from BDLAW.",
};

export default function LegalUpdatesStreamPage() {
  const items = getLegalUpdatesInsights();
  return <InsightsStreamClient stream="legal-updates" items={items} />;
}
