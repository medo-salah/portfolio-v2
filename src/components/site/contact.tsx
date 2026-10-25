import { profile } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SocialLinks } from "./navbar";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <p className="label-mono text-primary">05 / Contact</p>
          <h2 className="display mt-6 max-w-3xl text-4xl font-medium leading-[1.08] text-foreground md:text-6xl">
            Have a problem worth
            <span className="italic text-muted-foreground"> solving?</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I&apos;m open to data science and ML engineering roles, collaborations, and interesting
            problems. The fastest way to reach me is email — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-lift"
            >
              {profile.email}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
            </a>
            <a
              href={`tel:${profile.phoneRaw}`}
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="label-mono mt-10 text-muted-foreground/50">
            {"// TODO: replace this footer with an offer letter"}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rule mt-8 md:mt-10" />
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <p className="label-mono text-muted-foreground/60">
              © {new Date().getFullYear()} Mohamed Sameh Salah Eldine
            </p>
            <SocialLinks />
            <p className="label-mono text-muted-foreground/60">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
