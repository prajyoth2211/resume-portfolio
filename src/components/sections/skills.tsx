"use client";

import { motion } from "framer-motion";
import { highlights, skills } from "@/data/resume";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups = [
  { key: "frontend", label: "Frontend", items: skills.frontend },
  { key: "backend", label: "Backend", items: skills.backend },
  { key: "cloudDevOps", label: "Cloud / DevOps", items: skills.cloudDevOps },
  { key: "databases", label: "Databases", items: skills.databases },
  { key: "tools", label: "Tools", items: skills.tools },
  { key: "aiAutomation", label: "AI / Automation", items: skills.aiAutomation },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies used across recent enterprise platforms and delivery."
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{group.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li key={skill}>
                        <Badge variant="secondary">{skill}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 sm:p-8"
        >
          <h3 className="mb-4 text-lg font-semibold">Engineering highlights</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
