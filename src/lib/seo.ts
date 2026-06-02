import type { Metadata } from "next";
import { siteConfig } from "@/data/resume";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: heroDescription(),
  keywords: [
    "Software Engineer",
    "Angular",
    "Spring Boot",
    "TypeScript",
    "Full Stack",
    "Enterprise",
    "Genentech",
    "Apple",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: heroDescription(),
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: heroDescription(),
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function heroDescription() {
  return "Senior Software Engineer specializing in Angular, Spring Boot, and enterprise platforms across healthcare, pharma research, and supply chain.";
}
