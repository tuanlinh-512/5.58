import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownArticleBody from "@/components/MarkdownArticleBody";
import { insightBySlug, newsInsights } from "@/data/insights";
import { getLegalPostBySlug, getLegalPostSlugs } from "@/lib/posts";
import InsightArticleClient from "./insight-article-client";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  const news = newsInsights.map((i) => ({ slug: i.slug }));
  const legal = getLegalPostSlugs().map((slug) => ({ slug }));
  return [...news, ...legal];
}

export function generateMetadata({ params }: Props): Metadata {
  const legal = getLegalPostBySlug(params.slug);
  if (legal) {
    return {
      title: legal.insight.title_en,
      description: `${legal.insight.title_en} — BDLAW`,
    };
  }
  const insight = insightBySlug(params.slug);
  return {
    title: insight?.title_en ?? "Article",
    description: insight ? `${insight.title_en} — BDLAW` : undefined,
  };
}

export default function InsightDetailPage({ params }: Props) {
  const legal = getLegalPostBySlug(params.slug);
  if (legal) {
    return (
      <InsightArticleClient insight={legal.insight}>
        <MarkdownArticleBody content={legal.content} />
      </InsightArticleClient>
    );
  }

  const insight = insightBySlug(params.slug);
  if (!insight) notFound();
  return <InsightArticleClient insight={insight} />;
}
