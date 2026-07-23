import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";
import { heroPages } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div>
      <PageHero {...heroPages.contact} />
      <Contact />
    </div>
  );
}
