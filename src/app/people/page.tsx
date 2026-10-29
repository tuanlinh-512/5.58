import type { Metadata } from "next";
import PeopleClient from "./people-client";

export const metadata: Metadata = {
  title: "People",
  description: "Meet BDLAW lawyers and professionals.",
};

export default function PeoplePage() {
  return <PeopleClient />;
}
