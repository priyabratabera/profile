import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.add('dark');try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <TopBar />
        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-start">
          <Sidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
