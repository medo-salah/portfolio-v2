"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animated count-up for stat values like "560K", "0.90", "401".
 * Values that don't start with a digit ("K=5", "Live") render statically.
 */
export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || started.current || reduce) return;
    const m = value.match(/^(\d[\d.]*)(.*)$/);
    if (!m) return;
    started.current = true;

    const target = parseFloat(m[1]);
    const decimals = (m[1].split(".")[1] ?? "").length;
    const suffix = m[2];
    const duration = 1300;
    const t0 = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((target * eased).toFixed(decimals) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
