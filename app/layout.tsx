import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Viraj Jayasiri | Portfolio",
  description: "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.",
  keywords: ["Viraj Jayasiri", "Portfolio", "Web Developer", "Frontend Developer", "Backend Developer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Viraj Jayasiri" }],
  openGraph: {
    title: "Viraj Jayasiri | Portfolio",
    description: "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
    siteName: "Viraj Jayasiri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraj Jayasiri | Portfolio",
    description: "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${font.className} antialiased bg-white`}
      >
        <ResponsiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
