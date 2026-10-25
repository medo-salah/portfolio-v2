import { experience } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  // Deterministic pseudo git-hash per job id — a quiet developer wink
  const gitHash = (id: string) => {
    let h = 5381;
    for (let i = 0; i < id.length; i++) h = ((h << 5) + h + id.charCodeAt(i)) >>> 0;
    return h.toString(16).padStart(7, "0").slice(0, 7);
  };

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="01" label="Experience" title="Where I've worked" />

        <div className="md:grid md:grid-cols-12 md:gap-8">
          {/* Date rail (desktop) */}
          <div className="hidden md:col-span-4 md:block">
            <div className="sticky top-28">
              <p className="label-mono text-primary/80">$ git log --oneline --career</p>
              <p className="label-mono mt-4 text-muted-foreground/60">2024 — Present</p>
              <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                Field training, applied AI work, and a decade of scouting leadership — each role
                added a different tool to the kit.
              </p>
            </div>
          </div>

          <ol className="md:col-span-8">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <li
                  className={`group relative py-8 md:py-9 ${
                    i > 0 ? "border-t border-border" : "md:border-t-0"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display text-xl font-medium text-foreground md:text-[1.35rem]">
                      {job.role}
                    </h3>
                    <time className="label-mono shrink-0 text-muted-foreground">{job.period}</time>
                    <span className="label-mono hidden shrink-0 text-muted-foreground/40 sm:inline">
                      {gitHash(job.id)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm">
                    <span className="text-primary">{job.company}</span>
                    {job.location ? (
                      <span className="text-muted-foreground"> · {job.location}</span>
                    ) : null}
                    {job.tag ? (
                      <span className="label-mono ml-3 rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                        {job.tag}
                      </span>
                    ) : null}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-[9px] h-px w-3 shrink-0 bg-primary/60" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
