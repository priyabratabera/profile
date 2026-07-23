import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { About } from "@/components/sections/About";
import { AdTech } from "@/components/sections/AdTech";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { AiWorkflow } from "@/components/sections/AiWorkflow";
import { heroPages } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <PageHero {...heroPages.about} />
      <About />
      <AdTech />
      <Skills />
      <Experience />
      <AiWorkflow />
    </div>
  );
}
