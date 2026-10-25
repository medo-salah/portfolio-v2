# Mohamed Sameh — Portfolio

Personal portfolio of **Mohamed Sameh Salah Eldine** — Data Scientist & Machine Learning Engineer (Alexandria, Egypt).

Built as a single Next.js application with an editorial "espresso & brass" design system, a live-typing career terminal, and a scroll-driven training-run meter. Because a data scientist's portfolio should behave like a training loop: the further you read, the lower the loss.

## Highlights

- **Live career terminal** — auto-typing `whoami` / `cat stack.yaml` / `python train.py --career` with an animated epoch/loss progress bar, real benchmarks (560K events/sec, 401 tests), and one mandatory coffee joke. Replayable.
- **Model card** — a Hugging Face–style `model_card.yaml` presenting the candidate as a model: base model, fine-tuning, metrics, known limitations.
- **Feature-importance bars** — skills rendered as permutation-style weights that animate into view.
- **Scroll loss meter** — `val_loss` decays as you scroll and converges at the footer: `0.0000 ✓ converged · hire_ready = true`.
- **Count-up stats & tech ticker** — animated metrics strip and an infinite marquee of the actual stack.
- **Dual themes** — light "Champagne Paper" (default) and dark "Midnight Espresso", persisted across visits.
- **Respects `prefers-reduced-motion`** — every animation has a static fallback.

## Stack

| Layer      | Tech                                        |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 16 (App Router) · TypeScript        |
| Styling    | Tailwind CSS 4 · CSS custom properties      |
| Components | shadcn/ui                                   |
| Motion     | Framer Motion                               |
| Fonts      | Newsreader · Inter · JetBrains Mono         |

## Project structure

```
src/
├── app/                  # layout, page, global styles (design tokens)
├── components/
│   ├── site/             # hero, terminal, model card, sections, loss meter…
│   └── theme-provider.tsx
├── data/
│   └── portfolio.ts      # ← ALL content lives here (edit this file)
└── lib/
public/                   # favicon + CV PDF
```

> All portfolio content (projects, experience, skills, stats) is centralized in
> `src/data/portfolio.ts` — no need to touch components to update content.

## Run locally

```bash
bun install
bun dev          # http://localhost:3000
```

Or with npm: `npm install && npm run dev`.

## Deploy

The easiest path is [Vercel](https://vercel.com):

1. Push this repository to GitHub
2. Import it at vercel.com → framework auto-detected (Next.js)
3. Deploy — no environment variables required

## Contact

- Email: [smedo4407@gmail.com](mailto:smedo4407@gmail.com)
- LinkedIn: [mohamed-sameh](https://www.linkedin.com/in/mohamed-sameh-4614a925b/)
- GitHub: [@medo-salah](https://github.com/medo-salah)
