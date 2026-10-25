import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <p className="label-mono text-primary mb-4">
          {index} / {label}
        </p>
        <h2 className="display text-3xl md:text-5xl font-medium text-foreground">{title}</h2>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {lead}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
