import type { Metadata } from "next";
import { getLegalUpdatesInsights } from "@/lib/posts";
import InsightsClient from "./insights-client";

export const metadata: Metadata = {
  title: "Insights",
  description: "News and legal updates from BDLAW.",
};

export default function InsightsPage() {
  const legalPreview = getLegalUpdatesInsights().slice(0, 4);
  return <InsightsClient legalPreview={legalPreview} />;
}
