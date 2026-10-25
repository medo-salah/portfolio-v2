export const profile = {
  name: "Mohamed Sameh",
  fullName: "Mohamed Sameh Salah Eldine",
  role: "Data Scientist & Machine Learning Engineer",
  location: "Alexandria, Egypt",
  email: "smedo4407@gmail.com",
  phone: "+20 128 699 7445",
  phoneRaw: "+201286997445",
  github: "https://github.com/medo-salah",
  linkedin: "https://www.linkedin.com/in/mohamed-sameh-4614a925b/",
  site: "mohamed-sameh-portfolio-delta.vercel.app",
  resumeFile: "Mohamed_Sameh_CV_DS_ML.pdf",
  intro:
    "I build machine-learning systems that survive contact with production — streaming data platforms, LLM agents, computer-vision pipelines, and deep-learning models validated with rigorous walk-forward backtesting.",
  about: [
    "I'm a data scientist and ML engineer based in Alexandria, Egypt. My work sits at the intersection of research and engineering: I care as much about leakage-free validation and statistical rigor as I do about Kafka pipelines, Docker images, and clean REST APIs.",
    "Over the past few years I've built a streaming manufacturing analytics platform processing ~560K events per second at the edge, an MCP-based agent system with a deterministic verification layer, a Transformer/Bi-LSTM trading model for EGX and Tadawul stocks, and an ICAO-compliant passport OCR pipeline. I recently completed field training in data science and AI engineering at Comply Market, where I contributed an AI agent integrated into the company website.",
    "I hold a B.Sc. in Computing and Data Science from Alexandria University (GPA 3.50/4.00) and AWS and Cisco certifications. Outside of work, I've spent 12 years with the Saint Vincent Miami Scouts, where I lead a group of 40 members.",
  ],
  stats: [
    { value: "560K", label: "events/sec edge benchmark", note: "FactoryPulse C++ engine" },
    { value: "401", label: "automated tests passing", note: "Threadback verification suite" },
    { value: "9", label: "MCP domain tools", note: "Threadback agent system" },
    { value: "3.50", label: "GPA / 4.00", note: "B.Sc. Computing & Data Science" },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2" },
    { name: "French", level: "B2" },
  ],
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  summary?: string;
  bullets: string[];
  tag?: string;
};

export const experience: Experience[] = [
  {
    id: "comply-market",
    role: "Field Training — Data Science & AI Engineering",
    company: "Comply Market",
    location: "Alexandria, Egypt",
    period: "Aug 2026 — Oct 2026",
    tag: "Most recent",
    bullets: [
      "Supported the team on data science and AI engineering tasks across ongoing projects.",
      "Contributed to building an AI agent integrated into the company website.",
    ],
  },
  {
    id: "maim",
    role: "Data Science Training",
    company: "MAIM Digital Solutions",
    period: "Sep 2025",
    bullets: [
      "Completed hands-on training in machine learning workflows, data analytics, and project implementation.",
    ],
  },
  {
    id: "smart-garage",
    role: "IoT Field Training — Smart Garage System",
    company: "Smart Garage",
    period: "Jul 2024 — Sep 2024",
    bullets: [
      "Built a Smart Garage System on ESP32 and Arduino with a Flutter monitoring app.",
      "Used MQTT and Firebase for real-time cloud synchronization between devices and mobile.",
    ],
  },
  {
    id: "scouts",
    role: "Chief of the Movement Member",
    company: "Saint Vincent Miami Scouts",
    period: "2014 — Present",
    tag: "Leadership",
    bullets: [
      "Leading a group of 40 members aged 17 — planning and running camping trips and human-development sessions for over a decade.",
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  highlights?: string[];
  metrics?: { value: string; label: string }[];
  tech: string[];
  language?: string;
  langColor?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  status?: "live" | "wip";
};

export const projects: Project[] = [
  {
    id: "factorypulse",
    index: "01",
    title: "FactoryPulse",
    tagline: "Streaming manufacturing analytics platform",
    year: "2026",
    featured: true,
    description:
      "An end-to-end streaming platform built on the AI4I 2020 predictive-maintenance dataset (10,000 records, 20 simulated machines). A C++17 edge agent replays events into Apache Kafka, a Java 21 Kafka Streams service applies rule alerts and one-minute window aggregates, and an idempotent JDBC sink writes to SQL Server — modeled as a star schema with dbt, complete with staging layers, slowly-changing dimensions, and automated data tests.",
    highlights: [
      "Benchmarked the C++ rolling-statistics engine at ~560,000 events/sec (5 channels, 50-sample window, Apple A18 Pro).",
      "Compared logistic regression, random forest, gradient boosting, and a TensorFlow network under leakage controls — deterministic rules beat the best ML model on this synthetic data (F1 0.90 vs 0.86), validated with bootstrap confidence intervals and paired tests.",
      "Added a TensorFlow LSTM autoencoder for anomaly detection and R/Quarto reports covering control charts, process capability, McNemar and DeLong tests.",
      "Containerized with Docker Compose; GitHub Actions CI runs sanitizer-checked C++ tests plus Java, Python, and R suites with secret scanning.",
    ],
    metrics: [
      { value: "560K/sec", label: "edge throughput" },
      { value: "0.90", label: "rule F1 vs 0.86 ML" },
      { value: "20", label: "simulated machines" },
    ],
    tech: ["Kafka", "Java 21", "C++17", "TensorFlow", "R", "SQL Server", "dbt", "Docker"],
    language: "C++",
    langColor: "#f34b7d",
    githubUrl: "https://github.com/medo-salah/factorypulse",
  },
  {
    id: "threadback",
    index: "02",
    title: "Threadback",
    tagline: "Intent-recovery AI agent on MCP",
    year: "2026",
    featured: true,
    description:
      "An open-source agent system that reconstructs unfinished user commitments from conversation context, built natively on the Model Context Protocol with 9 canonical domain tools exposed over Streamable HTTP. A deterministic verification layer guarantees the LLM can never mark a task complete without evidence — conversational understanding and state management are strictly separated.",
    highlights: [
      "Integrates Amazon Bedrock with Strands Agents (Claude 3.5 Sonnet) alongside SQLite persistence and a React interface showing live tool activity.",
      "Designed a 9-stage commitment lifecycle: conversation → intent → commitment → dependency → unfinished state → next action → evidence → verification → closure.",
      "Verified with 401 automated tests and Ruff lint across 87 backend files; packaged for Amazon Bedrock AgentCore (ARM64) and Alexa+ add-ons.",
    ],
    metrics: [
      { value: "9", label: "MCP tools" },
      { value: "401", label: "tests passing" },
      { value: "Live", label: "demo deployed" },
    ],
    tech: ["Python", "FastAPI", "MCP", "Amazon Bedrock", "Strands Agents", "React", "TypeScript"],
    language: "Python",
    langColor: "#3572A5",
    githubUrl: "https://github.com/medo-salah/Threadback_AWS",
    demoUrl: "https://threadback-aws.vercel.app",
  },
  {
    id: "candlestick-trader",
    index: "03",
    title: "AI Candlestick Trader",
    tagline: "Deep-learning trading pipeline for EGX & Tadawul",
    year: "2026",
    featured: true,
    description:
      "A deep-learning pipeline for Egyptian and Saudi stocks with 22 engineered technical features and 18 candlestick-pattern detectors built from OHLC data. Trains a Pre-LN Transformer with CLS token alongside an attention-based Bi-LSTM, ensembles K=5 models with inverse-variance weighting, and searches hyperparameters with Optuna.",
    highlights: [
      "Walk-forward backtesting eliminates data leakage — evaluated on RMSE, Sharpe ratio, Calmar ratio, and win rate.",
      "Delivered as an interactive Streamlit + Plotly trading-terminal dashboard with a pytest suite.",
    ],
    metrics: [
      { value: "22", label: "technical features" },
      { value: "18", label: "pattern detectors" },
      { value: "K=5", label: "ensemble models" },
    ],
    tech: ["PyTorch", "Transformers", "Bi-LSTM", "Optuna", "Streamlit", "Plotly"],
    language: "Python",
    langColor: "#3572A5",
    githubUrl: "https://github.com/medo-salah/ai-candlestick-trader",
  },
  {
    id: "passport-ocr",
    index: "04",
    title: "Passport OCR & Document Verification",
    tagline: "ICAO-compliant identity document pipeline",
    year: "2026",
    description:
      "OCR pipeline combining EasyOCR, Tesseract, OpenCV, and spaCy to extract and validate passport and ID data. Implements ICAO-compliant MRZ detection and parsing, Error Level Analysis for authenticity checks, and face-quality analysis — exposed through a FastAPI REST API with batch processing and an analytics dashboard.",
    tech: ["FastAPI", "EasyOCR", "OpenCV", "Tesseract", "spaCy"],
    language: "Python",
    langColor: "#3572A5",
    githubUrl: "https://github.com/medo-salah/passport_ocr",
  },
  {
    id: "ai-insight-visualizer",
    index: "05",
    title: "AI Insight Visualizer",
    tagline: "Full-stack AI analytics platform",
    year: "2026",
    description:
      "Enterprise analytics platform that generates AI-driven insights, reports, and visualization recommendations from uploaded datasets using OpenAI services. Type-safe pnpm monorepo with OpenAPI specifications and Zod validation, background jobs on BullMQ and Redis, PostgreSQL storage, and Docker support.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Redis", "BullMQ"],
    language: "TypeScript",
    langColor: "#3178c6",
    githubUrl: "https://github.com/medo-salah/AI-Insight-Visualizer",
  },
  {
    id: "hasibha",
    index: "06",
    title: "Hasibha",
    tagline: "Personal finance analytics — graduation project",
    year: "2026",
    description:
      "The data and analytics layer of an Arabic-first personal finance platform for Egyptian users, covering transactions, saving goals with progress tracking, and multi-account management. Designed a MongoDB Aggregation Pipeline engine for the financial statistics and dashboard analytics, with user-scoped queries everywhere and JWT auth, input validation, and rate limiting.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    language: "JavaScript",
    langColor: "#f1e05a",
  },
  {
    id: "nagah",
    index: "07",
    title: "Nagah",
    tagline: "Multi-tenant EdTech SaaS — in development",
    year: "2026",
    description:
      "A multi-tenant platform for Egyptian secondary-education teachers with role-based access control, payment review workflows, and Docker-based deployment. Integrates Claude through a server-side adapter for AI essay grading against rubrics, plus lesson and quiz generation.",
    tech: ["NestJS", "React", "TypeScript", "PostgreSQL", "Docker", "Claude"],
    language: "TypeScript",
    langColor: "#3178c6",
    status: "wip",
  },
  {
    id: "loveda",
    index: "08",
    title: "LoveDA Semi-Supervised Segmentation",
    tagline: "Remote-sensing segmentation with sparse labels",
    year: "2026",
    description:
      "Semantic segmentation on the LoveDA remote-sensing dataset using sparse point-level supervision (~1% of pixels labeled) and a custom Partial Cross-Entropy loss. Trained with U-Net and mixed precision, optimized for low-resource 4GB GPUs.",
    tech: ["PyTorch", "U-Net", "Mixed Precision"],
    language: "Python",
    langColor: "#3572A5",
    githubUrl: "https://github.com/medo-salah/LoveDA-SemiSupervised-Segmentation",
  },
  {
    id: "hexaverse",
    index: "09",
    title: "Hexaverse Auth Backend",
    tagline: "Authentication backbone for data-driven apps",
    year: "2025",
    description:
      "Secure access layer supporting email/password and Google OAuth sign-in across Android, iOS, and web with JWT. Includes password recovery with real email delivery, email verification, SMS verification, and rate limiting behind scalable APIs for mobile and web clients.",
    tech: ["Node.js", "Express", "MongoDB", "Google OAuth", "JWT"],
    language: "JavaScript",
    langColor: "#f1e05a",
    githubUrl: "https://github.com/medo-salah/hexaverse-auth-backend",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "TypeScript", "JavaScript", "C++", "Java"],
  },
  {
    title: "Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Transformers",
      "LSTM",
      "Optuna",
      "Walk-forward backtesting",
      "Statistical analysis",
      "Feature engineering",
    ],
  },
  {
    title: "Computer Vision & NLP",
    skills: ["OpenCV", "EasyOCR", "Tesseract", "spaCy", "U-Net segmentation"],
  },
  {
    title: "LLMs & Agents",
    skills: [
      "Claude / Gemini / OpenAI APIs",
      "Model Context Protocol",
      "Agentic workflows",
      "Amazon Bedrock",
      "Strands Agents",
      "Prompt engineering",
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Kafka",
      "dbt",
      "Power BI",
      "Tableau",
      "Streamlit",
      "Plotly",
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "FastAPI",
      "Node.js",
      "NestJS",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "AWS (S3, Bedrock)",
      "Google Cloud Run",
      "Git",
      "Linux",
    ],
  },
];

export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export const education: Education = {
  id: "bsc",
  degree: "B.Sc. in Computing and Data Science",
  institution: "Faculty of Computers and Data Science, Alexandria University",
  period: "Sep 2022 — Jun 2026",
  detail:
    "GPA 3.50 / 4.00. Relevant coursework: Machine Learning, Artificial Intelligence, Data Mining, Database Systems, Cloud Computing, Data Structures, Algorithms, Operating Systems, Computer Networks, Web Development.",
};

export type Credential = {
  name: string;
  issuer: string;
  kind: "certification" | "course";
};

export const credentials: Credential[] = [
  { name: "AWS Certified AI Practitioner", issuer: "Manara Learning Path", kind: "certification" },
  { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", kind: "certification" },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    kind: "certification",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path & Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    kind: "course",
  },
  { name: "Understanding Data Science & EDA in Python", issuer: "DataCamp", kind: "course" },
  { name: "Software Engineering — Level 1", issuer: "Orange Digital Center", kind: "course" },
  { name: "CIB Summer Program", issuer: "The Green Leap", kind: "course" },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
