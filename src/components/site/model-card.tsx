import { Reveal } from "./reveal";

/**
 * ML "model card" (Hugging Face style) as a resume artifact — renders the
 * candidate as a model card in yaml. Purely presentational; every value is
 * real data from the CV.
 */
function Key({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground/85">{children}</span>;
}
function Dim({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground/70">{children}</span>;
}

export function ModelCard() {
  return (
    <Reveal className="mt-12 md:mt-16">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
        {/* Card header */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border bg-secondary/60 px-4 py-2.5 sm:px-5">
          <p className="label-mono text-muted-foreground">model_card.yaml</p>
          <span className="label-mono ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            status: open_to_work
          </span>
        </div>

        {/* yaml body */}
        <div className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-[1.85] sm:px-6 sm:text-[13px]">
          <pre className="min-w-0">
            <div>
              <Dim>---</Dim>
            </div>
            <div>
              <Key>model_name</Key>
              <Dim>:</Dim> <Str>mohamed-sameh-salah-eldine</Str>
            </div>
            <div>
              <Key>version</Key>
              <Dim>:</Dim> <Str>&quot;2026.10&quot;</Str> <Dim># latest release</Dim>
            </div>
            <div>
              <Key>license</Key>
              <Dim>:</Dim> <Str>open-to-work</Str>
            </div>
            <div>
              <Key>architecture</Key>
              <Dim>:</Dim> <Str>hybrid</Str> <Dim># statistics + engineering + leadership</Dim>
            </div>
            <div>
              <Key>base_model</Key>
              <Dim>:</Dim> <Str>B.Sc. Computing &amp; Data Science — Alexandria University</Str>
            </div>
            <div className="pl-6">
              <Key>fine_tuned_on</Key>
              <Dim>:</Dim> <Str>field training @ Comply Market · MAIM</Str>
            </div>
            <div>
              <Key>training_data</Key>
              <Dim>:</Dim>
            </div>
            <div className="pl-6">
              <Key>projects</Key>
              <Dim>:</Dim> <Str>9 shipped</Str> <Dim># streaming · agents · vision · finance</Dim>
            </div>
            <div className="pl-6">
              <Key>leadership_pretraining</Key>
              <Dim>:</Dim> <Str>12 yrs, 40-member scout group</Str>
            </div>
            <div>
              <Key>metrics</Key>
              <Dim>:</Dim>
            </div>
            <div className="pl-6">
              <Key>edge_throughput</Key>
              <Dim>:</Dim> <Str>560,000 events/sec</Str>
            </div>
            <div className="pl-6">
              <Key>test_suite</Key>
              <Dim>:</Dim> <Str>401/401 passing</Str>
            </div>
            <div className="pl-6">
              <Key>mcp_tools</Key>
              <Dim>:</Dim> <Str>9</Str>
            </div>
            <div className="pl-6">
              <Key>gpa</Key>
              <Dim>:</Dim> <Str>3.50 / 4.00</Str>
            </div>
            <div>
              <Key>known_limitations</Key>
              <Dim>:</Dim>
            </div>
            <div className="pl-6">
              <Dim>-</Dim> <Str>prefers well-posed problems</Str>{" "}
              <Dim># mitigation: currently in training</Dim>
            </div>
            <div className="pl-6">
              <Dim>-</Dim> <Str>allergic to vanity metrics</Str>
            </div>
            <div>
              <Key>intended_use</Key>
              <Dim>:</Dim> <Str>teams that need ML in production, not in slides</Str>
            </div>
          </pre>
        </div>

        {/* Footer quip */}
        <div className="border-t border-border px-4 py-3 sm:px-6">
          <p className="font-mono text-[11px] text-muted-foreground/70">
            <span className="text-primary/70">{"//"}</span> inference runs best on interesting
            problems. audit trail: cv.pdf ↓
          </p>
        </div>
      </div>
    </Reveal>
  );
}
