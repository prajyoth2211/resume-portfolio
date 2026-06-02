import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { siteConfig } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

export const metadata = {
  title: "Resume",
  description: `View and download ${siteConfig.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>
          <Button asChild>
            <a href={siteConfig.resumePdfPath} download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <iframe
            title="Resume PDF"
            src={`${siteConfig.resumePdfPath}#view=FitH`}
            className="h-[calc(100vh-12rem)] w-full min-h-[600px]"
          />
        </div>
      </main>
    </>
  );
}
