import { education, credentials } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="04" label="Education" title="Degrees & credentials" />

        <div className="md:grid md:grid-cols-12 md:gap-10">
          {/* Degree */}
          <Reveal className="md:col-span-5">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft md:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="label-mono text-muted-foreground">{education.period}</span>
              </div>
              <h3 className="display mt-5 text-xl font-medium text-foreground md:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-primary">{education.institution}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{education.detail}</p>
            </div>
          </Reveal>

          {/* Credentials */}
          <div className="mt-10 md:col-span-7 md:mt-0">
            <Reveal>
              <p className="label-mono mb-2 text-muted-foreground/60">
                Certifications & courses
              </p>
            </Reveal>
            <ol>
              {credentials.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.04}>
                  <li className="flex items-baseline justify-between gap-4 border-t border-border py-4 last:border-b">
                    <div>
                      <p className="text-sm font-medium text-foreground md:text-[15px]">{c.name}</p>
                      <p className="mt-0.5 text-[13px] text-muted-foreground">{c.issuer}</p>
                    </div>
                    <span
                      className={`label-mono shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] ${
                        c.kind === "certification"
                          ? "border-primary/40 text-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {c.kind}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
