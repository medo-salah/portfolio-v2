import { profile } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { ModelCard } from "./model-card";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <div className="md:grid md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <p className="label-mono text-primary">About</p>
          <p className="display mt-4 text-2xl font-medium leading-snug text-foreground md:text-3xl">
            Research rigor,
            <br />
            <span className="italic text-muted-foreground">engineering habits.</span>
          </p>
        </Reveal>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:col-span-8 md:mt-1 md:text-base">
          {profile.about.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="flex flex-wrap gap-x-6 gap-y-1 pt-2 text-[13px]">
              {profile.languages.map((l) => (
                <span key={l.name}>
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-muted-foreground/70"> — {l.level}</span>
                </span>
              ))}
            </p>
          </Reveal>
        </div>
        </div>
        <ModelCard />
      </div>
    </section>
  );
}
