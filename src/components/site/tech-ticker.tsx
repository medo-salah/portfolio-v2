const ITEMS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Kafka",
  "SQL",
  "FastAPI",
  "AWS",
  "Docker",
  "TypeScript",
  "MCP",
  "MongoDB",
  "OpenCV",
  "dbt",
  "PostgreSQL",
  "React",
  "GitHub Actions",
  "scikit-learn",
  "Power BI",
];

export function TechTicker() {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="label-mono flex items-center whitespace-nowrap">
          <span className="px-5 text-muted-foreground">{item}</span>
          <span className="text-primary/50">{"//"}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee overflow-hidden border-y border-border bg-card/60 py-3.5"
      role="marquee"
      aria-label="Technologies I work with"
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
