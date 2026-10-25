"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./navbar";
import { Terminal } from "./terminal";
import { Counter } from "./counter";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 pt-36 pb-16 md:px-8 md:pt-44 md:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <motion.p {...anim(0)} className="label-mono text-muted-foreground">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle ring-4 ring-primary/15" />
              {profile.location} — Available for opportunities
            </motion.p>

            <motion.h1
              {...anim(0.08)}
              className="display mt-7 text-[2.75rem] leading-[1.02] font-medium text-foreground sm:text-6xl md:text-7xl"
            >
              Mohamed Sameh
              <br />
              <span className="italic text-muted-foreground">Salah Eldine</span>
              <span className="text-primary">.</span>
            </motion.h1>

            <motion.p {...anim(0.16)} className="display mt-6 text-xl italic text-foreground/80 md:text-2xl">
              {profile.role}
            </motion.p>

            <motion.p
              {...anim(0.24)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div {...anim(0.32)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-lift"
              >
                View projects
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={`/${profile.resumeFile}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Download CV
                <span className="ml-1.5 text-muted-foreground">↗</span>
              </a>
              <SocialLinks className="ml-1" />
            </motion.div>
          </div>

          <motion.div
            {...anim(0.5)}
            className="mt-16 lg:col-span-5 lg:mt-0"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Stats strip — concrete numbers, not adjectives */}
        <motion.dl
          {...anim(0.42)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-soft md:mt-24 md:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-5 md:px-6 md:py-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="display text-2xl font-medium text-foreground md:text-3xl">
                <Counter value={s.value} />
              </dd>
              <dd className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{s.label}</dd>
              <dd className="label-mono mt-1 text-[10px] text-muted-foreground/60">{s.note}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
