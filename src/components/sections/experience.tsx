"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Enterprise software across pharma research, supply chain, healthcare, and financial services."
        />

        <div className="relative">
          <div
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:block"
            aria-hidden
          />

          <ol className="space-y-8">
            {experience.map((job, index) => (
              <motion.li
                key={`${job.company}-${job.start}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05 }}
                className="relative sm:pl-12"
              >
                <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background shadow-sm sm:flex">
                  <Briefcase className="h-4 w-4 text-primary" aria-hidden />
                </span>

                <Card className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.role}</CardTitle>
                        <p className="mt-1 font-medium text-primary">
                          {job.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {job.location}
                        </p>
                      </div>
                      <p className="shrink-0 text-sm font-medium text-muted-foreground">
                        {job.start} – {job.end}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary/70">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
