import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Projects } from "@/components/sections/Projects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { heroPages } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function WorkPage() {
  return (
    <div>
      <PageHero {...heroPages.work} />
      <Projects showViewAll={false} />
      <CaseStudies />
    </div>
  );
}
