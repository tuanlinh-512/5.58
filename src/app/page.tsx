import type { Metadata } from "next";
import { getAllInsightsSorted } from "@/lib/posts";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Home",
  description:
    "BDLAW — premier commercial law firm in Vietnam. Strategic legal solutions for multinational corporations and leading enterprises.",
};

export default function Page() {
  const featuredInsights = getAllInsightsSorted().slice(0, 3);
  return <HomeClient featuredInsights={featuredInsights} />;
}
