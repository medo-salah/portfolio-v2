import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ImportanceBars } from "./importance-bars";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="03"
          label="Toolkit"
          title="Skills & tooling"
          lead="Grouped the way I actually reach for them — from writing the model to shipping the service around it."
        />

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="border-t border-border pt-5">
                <h3 className="label-mono text-primary">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {group.skills.map((skill, j) => (
                    <li key={skill} className="flex items-center gap-2">
                      {j > 0 ? <span className="text-muted-foreground/40">/</span> : null}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <ImportanceBars />
      </div>
    </section>
  );
}
