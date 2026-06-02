"use client";

import { Download, Eye } from "lucide-react";
import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/data/resume";

type ResumeActionsProps = {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  showPreview?: boolean;
  className?: string;
};

export function ResumeDownloadButton({
  variant = "default",
  size = "default",
  className,
}: Pick<ResumeActionsProps, "variant" | "size" | "className">) {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href={siteConfig.resumePdfPath} download>
        <Download className="h-4 w-4" />
        Download Resume
      </a>
    </Button>
  );
}

export function ResumePreviewButton({
  variant = "outline",
  size = "default",
}: Pick<ResumeActionsProps, "variant" | "size">) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          <Eye className="h-4 w-4" />
          Preview Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-hidden p-0 sm:max-w-5xl">
        <DialogHeader className="border-b border-border px-6 py-4">
          <DialogTitle>Resume Preview</DialogTitle>
          <DialogDescription className="sr-only">
            Embedded PDF preview of the resume. Download or open the full page
            from the actions below.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[75vh] w-full">
          <iframe
            title="Resume PDF preview"
            src={`${siteConfig.resumePdfPath}#view=FitH`}
            className="h-full w-full border-0"
          />
        </div>
        <div className="flex justify-end gap-2 border-t border-border px-6 py-4">
          <Button variant="outline" asChild>
            <Link href="/resume">Open full page</Link>
          </Button>
          <ResumeDownloadButton />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ResumeActions({
  variant = "default",
  size = "default",
  showPreview = true,
}: ResumeActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <ResumeDownloadButton variant={variant} size={size} />
      {showPreview && <ResumePreviewButton variant="outline" size={size} />}
    </div>
  );
}
