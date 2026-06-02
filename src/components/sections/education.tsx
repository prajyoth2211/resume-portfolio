"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "@/data/resume";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">
                      {item.degree}
                    </CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.school}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary">{item.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
