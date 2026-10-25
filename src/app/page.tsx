import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TechTicker } from "@/components/site/tech-ticker";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Projects } from "@/components/site/projects";
import { Skills } from "@/components/site/skills";
import { Education } from "@/components/site/education";
import { Contact } from "@/components/site/contact";
import { LossMeter } from "@/components/site/loss-meter";

export default function Home() {
  return (
    <div className="grain min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact />
      <LossMeter />
    </div>
  );
}
