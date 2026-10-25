"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type Line = { kind: "cmd" | "out" | "bar"; text: string; tone?: "ok" | "warn" | "path" };

const CELL_TOTAL = 10;
const cells = (n: number) => "█".repeat(n) + "░".repeat(CELL_TOTAL - n);

/* Animated training run — each frame rewrites the same line in place */
const BAR_FRAMES = [
  `epoch 01/10 ${cells(1)} loss 0.9412`,
  `epoch 03/10 ${cells(3)} loss 0.5687`,
  `epoch 05/10 ${cells(5)} loss 0.2834`,
  `epoch 07/10 ${cells(7)} loss 0.1189`,
  `epoch 09/10 ${cells(9)} loss 0.0466`,
  `epoch 10/10 ${cells(CELL_TOTAL)} loss 0.0331 ✓`,
];
const BAR_FINAL = BAR_FRAMES[BAR_FRAMES.length - 1];

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "mohamed-sameh — data scientist & ml engineer" },
  { kind: "cmd", text: "cat stack.yaml" },
  { kind: "out", text: "core:   python · pytorch · sql · fastapi" },
  { kind: "out", text: "infra:  kafka · aws · docker · mcp" },
  { kind: "cmd", text: "python train.py --career" },
  { kind: "bar", text: BAR_FINAL },
  { kind: "out", text: "[ok] converged — ready for inference", tone: "ok" },
  { kind: "cmd", text: "python bench.py --engine factorypulse" },
  { kind: "out", text: "[ok] 560,000 events/sec", tone: "ok" },
  { kind: "out", text: "[ok] 401 tests passing · 0 failing", tone: "ok" },
  { kind: "cmd", text: "nvidia-smi --query-curiosity" },
  { kind: "out", text: "[warn] curiosity-util at 100% — no idle cycles", tone: "warn" },
  { kind: "cmd", text: "sudo make coffee" },
  { kind: "out", text: "[warn] coffee not found — using tea", tone: "warn" },
  { kind: "out", text: "[ok] shipping anyway. standards > caffeine", tone: "ok" },
  { kind: "cmd", text: "ls ./opportunities" },
  { kind: "out", text: "data_science/  ml_engineering/  your_team/", tone: "path" },
];

function Prompt() {
  return (
    <>
      <span className="text-[#bb9457]">mohamed@portfolio</span>
      <span className="text-[#6b4f3a]">:~$&nbsp;</span>
    </>
  );
}

function toneClass(tone?: Line["tone"]) {
  switch (tone) {
    case "ok":
      return "text-[#b8c78a]";
    case "warn":
      return "text-[#e8b06b]";
    case "path":
      return "text-[#d99a5b]";
    default:
      return "text-[#bfa88b]";
  }
}

export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const runIdRef = useRef(0);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const [visible, setVisible] = useState<Line[]>([]);
  const [partial, setPartial] = useState("");
  const [barFrame, setBarFrame] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [token, setToken] = useState(0);

  // Reduced motion: skip the typewriter entirely and render the full script
  const shown = reduce && inView ? SCRIPT : visible;
  const complete = reduce ? inView : !running && visible.length >= SCRIPT.length;

  // Typewriter run
  useEffect(() => {
    if (!inView || reduce) return;

    const runId = ++runIdRef.current;
    const timers: number[] = [];
    let li = 0;

    const step = () => {
      if (runId !== runIdRef.current) return;
      if (li >= SCRIPT.length) {
        setRunning(false);
        setPartial("");
        return;
      }
      const line = SCRIPT[li];

      if (line.kind === "out") {
        setVisible((v) => [...v, line]);
        li += 1;
        timers.push(window.setTimeout(step, 120));
        return;
      }

      if (line.kind === "bar") {
        // Frames rewrite one line in place, then commit the final frame
        let fi = 0;
        const nextFrame = () => {
          if (runId !== runIdRef.current) return;
          setBarFrame(BAR_FRAMES[fi]);
          fi += 1;
          if (fi < BAR_FRAMES.length) {
            timers.push(window.setTimeout(nextFrame, 130));
          } else {
            timers.push(
              window.setTimeout(() => {
                if (runId !== runIdRef.current) return;
                setVisible((v) => [...v, { kind: "out", text: BAR_FINAL, tone: "ok" }]);
                setBarFrame(null);
                li += 1;
                step();
              }, 300),
            );
          }
        };
        nextFrame();
        return;
      }

      // cmd — type character by character
      let ci = 0;
      const typeChar = () => {
        if (runId !== runIdRef.current) return;
        ci += 1;
        setPartial(line.text.slice(0, ci));
        if (ci < line.text.length) {
          timers.push(window.setTimeout(typeChar, 24 + Math.random() * 42));
        } else {
          timers.push(
            window.setTimeout(() => {
              if (runId !== runIdRef.current) return;
              setVisible((v) => [...v, line]);
              setPartial("");
              li += 1;
              step();
            }, 220),
          );
        }
      };
      typeChar();
    };

    timers.push(
      window.setTimeout(() => {
        if (runId !== runIdRef.current) return;
        setRunning(true);
        step();
      }, token === 0 ? 350 : 120),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, token, reduce]);

  const replay = () => {
    runIdRef.current += 1;
    setVisible([]);
    setPartial("");
    setBarFrame(null);
    setToken((t) => t + 1);
    setRunning(true);
  };

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-[#3a2418] bg-[#170d07] shadow-lift"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[#3a2418]/80 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#c9584c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#bb9457]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#8fae6a]" />
        <span className="ml-3 truncate font-mono text-[11px] text-[#8a6a52]">
          mohamed@portfolio: ~/career
        </span>
        <button
          type="button"
          onClick={replay}
          aria-label="Replay terminal"
          className="ml-auto flex h-6 w-6 items-center justify-center rounded-md text-[#8a6a52] transition-colors hover:bg-white/5 hover:text-[#f0e2c8]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Body */}
      <div className="min-h-[22rem] whitespace-pre-wrap break-words px-4 py-4 font-mono text-[12.5px] leading-[1.75] sm:text-[13px]">
        {shown.map((line, i) => (
          <div key={`${i}-${line.text.slice(0, 12)}`}>
            {line.kind === "cmd" ? (
              <>
                <Prompt />
                <span className="text-[#f0e2c8]">{line.text}</span>
              </>
            ) : (
              <span className={toneClass(line.tone)}>{line.text}</span>
            )}
          </div>
        ))}

        {/* Animated training bar (rewrites in place) */}
        {barFrame ? (
          <div>
            <span className="text-[#b8c78a]">{barFrame}</span>
          </div>
        ) : null}

        {/* Active typing line */}
        {running ? (
          <div>
            {partial ? (
              <>
                <Prompt />
                <span className="text-[#f0e2c8]">{partial}</span>
              </>
            ) : null}
            <span className="cursor-blink ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-[#bb9457]/80" />
          </div>
        ) : complete ? (
          <div>
            <Prompt />
            <span className="cursor-blink inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-[#bb9457]/80" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
