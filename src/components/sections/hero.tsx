"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { hero, siteConfig } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ResumeActions } from "@/components/resume/resume-actions";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to senior engineering opportunities
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
            {siteConfig.title}
          </p>

          <p className="mt-3 flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden />
              {siteConfig.location}
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {siteConfig.email}
            </a>
          </p>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hero.summary}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <ResumeActions variant="default" size="lg" />
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Explore
        </motion.a>
      </div>
    </section>
  );
}
