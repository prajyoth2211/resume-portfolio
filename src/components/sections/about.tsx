"use client";

import { motion } from "framer-motion";
import { about } from "@/data/resume";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineering with ownership and clarity"
          description="Full-stack delivery across regulated enterprise environments."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            {about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md lg:col-span-2"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Core strengths
            </h3>
            <ul className="flex flex-wrap gap-2">
              {about.strengths.map((strength) => (
                <li key={strength}>
                  <Badge variant="outline" className="px-3 py-1.5 text-sm">
                    {strength}
                  </Badge>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Domains:</span>{" "}
                Pharmaceutical research, healthcare, supply chain, fintech
              </p>
              <p>
                <span className="font-medium text-foreground">Focus:</span>{" "}
                Platform engineering, auth systems, search dashboards, regulated
                documents
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
