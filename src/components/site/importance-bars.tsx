"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * "Feature importance" block for the skills section — permutation-style
 * weights over the core stack. Values are honest self-assessment anchored
 * to shipped projects; the caption makes the joke explicit.
 */
const FEATURES = [
  { name: "python", weight: 0.97 },
  { name: "sql", weight: 0.94 },
  { name: "pytorch", weight: 0.91 },
  { name: "fastapi", weight: 0.88 },
  { name: "docker", weight: 0.85 },
  { name: "kafka", weight: 0.82 },
];

export function ImportanceBars() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-14 border-t border-border pt-10 md:mt-16">
      <p className="label-mono text-primary"># feature_importance</p>
      <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground/80">
        permutation values — computed on the validation set of shipped projects
      </p>

      <ul className="mt-7 grid gap-x-12 gap-y-5 sm:grid-cols-2">
        {FEATURES.map((f, i) => (
          <li key={f.name} className="flex items-center gap-4">
            <span className="w-20 shrink-0 font-mono text-[12.5px] text-foreground sm:w-24 sm:text-[13px]">
              {f.name}
            </span>
            <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-border">
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: `${f.weight * 100}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
            <span className="w-10 shrink-0 text-right font-mono text-[11px] text-muted-foreground tabular-nums">
              {f.weight.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-mono text-[10.5px] text-muted-foreground/60">
        * coffee was a control variable and remains statistically significant
      </p>
    </div>
  );
}
