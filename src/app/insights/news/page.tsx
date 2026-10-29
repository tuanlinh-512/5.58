import type { Metadata } from "next";
import InsightsStreamClient from "../insights-stream-client";

export const metadata: Metadata = {
  title: "News",
  description: "BDLAW news and announcements.",
};

export default function NewsStreamPage() {
  return <InsightsStreamClient stream="news" />;
}
