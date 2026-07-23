import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AdTech } from "@/components/sections/AdTech";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Experience } from "@/components/sections/Experience";
import { ResumeSummary } from "@/components/sections/ResumeSummary";
import { AiWorkflow } from "@/components/sections/AiWorkflow";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AdTech />
      <Skills />
      <Projects />
      <CaseStudies />
      <Experience />
      <ResumeSummary />
      <AiWorkflow />
      <Blog />
      <Contact />
    </div>
  );
}
