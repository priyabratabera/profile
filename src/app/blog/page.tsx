import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Blog } from "@/components/sections/Blog";
import { heroPages } from "@/lib/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div>
      <PageHero {...heroPages.blog} />
      <Blog />
    </div>
  );
}
