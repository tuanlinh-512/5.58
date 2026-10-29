import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { professionals, getName } from "@/data/professionals";
import { getPersonMarkdownBySlug, getPeopleMarkdownSlugs } from "@/lib/people-content";
import MarkdownProfileClient from "./markdown-profile-client";
import ProfessionalProfileClient from "./professional-profile-client";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  const dataSlugs = professionals.map((p) => ({ slug: p.slug }));
  const mdSlugs = getPeopleMarkdownSlugs().map((slug) => ({ slug }));
  return [...dataSlugs, ...mdSlugs];
}

export function generateMetadata({ params }: Props): Metadata {
  const mdPerson = getPersonMarkdownBySlug(params.slug);
  if (mdPerson) {
    return {
      title: mdPerson.name_en || mdPerson.name,
      description: mdPerson.summary_en || mdPerson.summary,
    };
  }

  const person = professionals.find((p) => p.slug === params.slug);
  return {
    title: person ? getName(person, "en") : "Profile",
    description: person ? person.bio_en.slice(0, 160) : undefined,
  };
}

export default function ProfessionalProfilePage({ params }: Props) {
  const mdPerson = getPersonMarkdownBySlug(params.slug);
  if (mdPerson) {
    return <MarkdownProfileClient person={mdPerson} />;
  }

  const person = professionals.find((p) => p.slug === params.slug);
  if (!person) notFound();
  const encodedEmail = Buffer.from(person.email, "utf8").toString("base64");
  const encodedPhone = person.phone ? Buffer.from(person.phone, "utf8").toString("base64") : undefined;
  return (
    <ProfessionalProfileClient
      person={{ ...person, email: "", phone: undefined }}
      encodedEmail={encodedEmail}
      encodedPhone={encodedPhone}
    />
  );
}
