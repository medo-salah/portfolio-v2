"use client";

import { useEffect, useState } from "react";

/**
 * Training-run scroll meter — a fixed chip that treats reading the page as a
 * training loop: val_loss decays toward 0 as you scroll, and "converges"
 * (hire_ready = true) near the footer. Pure decoration; hidden from a11y tree.
 */
export function LossMeter() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const converged = progress >= 0.97;
  const loss = (1 - progress).toFixed(4);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-3 bottom-3 z-40 sm:right-5 sm:bottom-5"
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 py-1.5 pr-3 pl-3 shadow-soft backdrop-blur sm:gap-2.5">
        {converged ? (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-primary ring-2 ring-primary/20" />
            <span className="font-mono text-[10px] tracking-wide text-foreground">
              val_loss 0.0000
            </span>
            <span className="font-mono text-[10px] tracking-wide text-primary">✓ converged</span>
            <span className="hidden font-mono text-[10px] tracking-wide text-muted-foreground sm:inline">
              hire_ready = true
            </span>
          </>
        ) : (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
              val_loss
            </span>
            <span className="font-mono text-[10px] tracking-wide text-foreground tabular-nums">
              {loss}
            </span>
            <span className="relative h-1 w-12 overflow-hidden rounded-full bg-border sm:w-16">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] duration-150 ease-out"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </span>
          </>
        )}
      </div>
    </div>
  );
}
