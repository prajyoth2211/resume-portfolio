import { siteConfig } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8 sm:text-left">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
