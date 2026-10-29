import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practices } from "@/data/practices";
import PracticeDetailClient from "./practice-detail-client";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const practice = practices.find((p) => p.slug === params.slug);
  return {
    title: practice?.title_en ?? "Practice",
    description: practice?.description_en,
  };
}

export default function PracticeDetailPage({ params }: Props) {
  const practice = practices.find((p) => p.slug === params.slug);
  if (!practice) notFound();
  return <PracticeDetailClient practice={practice} />;
}
