"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")
      }
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-muted-foreground/50"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="block h-4 w-4 dark:hidden" />
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="display text-lg font-medium italic text-foreground">
          M<span className="text-primary">.</span>Sameh
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-primary/70 mr-1">0{i + 1}</span> {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`/${profile.resumeFile}`}
            target="_blank"
            rel="noreferrer"
            className="label-mono hidden h-9 items-center rounded-full border border-border px-4 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground sm:flex"
          >
            CV ↗
          </a>
          {/* Mobile nav */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`/${profile.resumeFile}`}
              target="_blank"
              rel="noreferrer"
              className="label-mono flex h-9 items-center rounded-full border border-border px-3 text-muted-foreground"
            >
              CV ↗
            </a>
          </div>
        </div>
      </div>
      {/* Mobile inline links row */}
      <div className="md:hidden border-t border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-5 overflow-x-auto px-5 py-2.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono whitespace-nowrap text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <Github className="h-[18px] w-[18px]" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <Linkedin className="h-[18px] w-[18px]" />
      </a>
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <Mail className="h-[18px] w-[18px]" />
      </a>
    </div>
  );
}
