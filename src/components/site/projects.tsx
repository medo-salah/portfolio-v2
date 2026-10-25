import { projects } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Counter } from "./counter";
import { ArrowUpRight } from "lucide-react";

function LangDot({ name, color }: { name?: string; color?: string }) {
  if (!name || !color) return null;
  return (
    <span className="label-mono inline-flex items-center gap-1.5 text-[11px] normal-case tracking-normal text-muted-foreground">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      {name}
    </span>
  );
}

function TechLine({ tech }: { tech: string[] }) {
  return (
    <p className="label-mono text-[11px] leading-relaxed text-muted-foreground/80">
      {tech.join("  ·  ")}
    </p>
  );
}

function ProjectLinks({ githubUrl, demoUrl, light = false }: { githubUrl?: string; demoUrl?: string; light?: boolean }) {
  if (!githubUrl && !demoUrl) return null;
  return (
    <div className={`flex items-center gap-5 ${light ? "mt-5" : ""}`}>
      {demoUrl ? (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="label-mono inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-75"
        >
          Live demo <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : null}
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="label-mono inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          Source <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </div>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[number] }) {
  return (
    <Reveal>
      <article className="group relative rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift md:p-9">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="label-mono text-muted-foreground/60">
            {project.index} — {project.tagline}
          </p>
          <p className="label-mono text-muted-foreground/60">
            {project.year}
            {project.status === "wip" ? " · in progress" : ""}
          </p>
        </div>

        <h3 className="display mt-4 text-2xl font-medium text-foreground md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.highlights ? (
          <ul className="mt-5 max-w-3xl space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h.slice(0, 28)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-[9px] h-px w-3 shrink-0 bg-primary/60" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {project.metrics ? (
          <dl className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-background px-4 py-3.5">
                <dd className="display text-lg font-medium text-primary md:text-xl">
                  <Counter value={m.value} />
                </dd>
                <dt className="mt-0.5 text-xs text-muted-foreground">{m.label}</dt>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-5">
          <div className="flex flex-col gap-2">
            <LangDot name={project.language} color={project.langColor} />
            <TechLine tech={project.tech} />
          </div>
          <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
        </div>
      </article>
    </Reveal>
  );
}

function ArchiveRow({ project }: { project: (typeof projects)[number] }) {
  return (
    <Reveal>
      <li className="group border-t border-border py-6 transition-colors last:border-b hover:bg-card/60 md:py-7">
        <div className="md:grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-1">
            <p className="label-mono text-muted-foreground/50">{project.index}</p>
          </div>
          <div className="mt-2 md:col-span-6 md:mt-0">
            <h3 className="flex flex-wrap items-center gap-2 text-base font-medium text-foreground md:text-lg">
              {project.title}
              <LangDot name={project.language} color={project.langColor} />
              {project.status === "wip" ? (
                <span className="label-mono rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                  WIP
                </span>
              ) : null}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground/85">
              {project.description}
            </p>
            <div className="mt-3 md:hidden">
              <TechLine tech={project.tech} />
              <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} light />
            </div>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <TechLine tech={project.tech} />
            <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} light />
          </div>
          <div className="hidden md:col-span-1 md:flex md:justify-end">
            <span className="label-mono text-muted-foreground/50">{project.year}</span>
          </div>
        </div>
      </li>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="02"
          label="Projects"
          title="Selected work"
          lead="Nine projects across streaming data, agentic AI, computer vision, and full-stack engineering. Three are featured in depth; the rest are in the archive."
        />

        <div className="space-y-6 md:space-y-8">
          {featured.map((p) => (
            <FeaturedProject key={p.id} project={p} />
          ))}
        </div>

        <Reveal className="mt-20 md:mt-28">
          <p className="label-mono text-muted-foreground/60">Archive</p>
        </Reveal>
        <ul className="mt-4">
          {archive.map((p) => (
            <ArchiveRow key={p.id} project={p} />
          ))}
        </ul>

        <Reveal className="mt-10">
          <a
            href="https://github.com/medo-salah?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="label-mono inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-75"
          >
            View full archive on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
