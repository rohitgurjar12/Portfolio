# Rohit Gurjar — Developer & Designer Portfolio

**Rohit Gurjar** — AI/ML Engineering Student with hands-on experience in fine-tuning large language models, Python, Java, and fall-stack development. Passionate about building intelligent software and learning AI technology. Looking for opportunities to grow as an AI Engineer and contribute to impactful, real-world AI Systems.";

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for one-click deployment on **Vercel**.

## Stack

- React 18 / TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — name, tagline, magnetic-hover portrait
2. **About** — bio + skills grouped by Languages / Frameworks / Tools / AI
3. **Services** — UI/UX Design, Web Design, Front-end Development, GenAI Integration
4. **Projects** — sticky-stacking cards for AI Tutor, PiLearn, ResumeIQ, Notch
5. **Contact** — Email, WhatsApp, LinkedIn, GitHub

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy to Vercel

Push to GitHub → import the repo at [vercel.com/new](https://vercel.com/new) → click Deploy. No environment variables needed.

## Project structure

```
src/
├── App.tsx                    # composes all sections
├── main.tsx                   # React entry
├── index.css                  # global styles + .hero-heading gradient
└── components/
    ├── HeroSection.tsx        # navbar, massive heading, magnetic portrait
    ├── AboutSection.tsx       # bio, animated text, skills grid
    ├── ServicesSection.tsx    # white section, 4 numbered services
    ├── ProjectsSection.tsx    # sticky-stacking project cards
    ├── ContactSection.tsx     # 4 contact methods with icons
    │
    ├── ContactButton.tsx      # gradient pill CTA
    ├── LiveProjectButton.tsx  # ghost outline pill
    ├── FadeIn.tsx             # whileInView animation wrapper
    ├── Magnet.tsx             # mouse-following magnetic hover
    └── AnimatedText.tsx       # char-by-char scroll-driven reveal
```

## Featured projects

| Project | Live | Built with |
|---|---|---|
| TravelMate | [travellmate.vercel.app](https://travellmate.vercel.app) | Full-Stack Web Development |
| Caferia | [caferiavintagecafe.vercel.app](https://caferiavintagecafe.vercel.app) | HTML, CSS, JavaScript |
| SpotifyClone | [spotifycl0ne.vercel.app](https://spotifycl0ne.vercel.app) | HTML, CSS, JavaScript |
| PortFolio | [rohitgurjarportfolio.vercel.app](https://rohitgurjarportfolio.vercel.app) | React, TypeScript, Vite, Tailwind CSS, Framer Motion |

## Credits

Designed & built by **Rohit Gurjar** · [LinkedIn](https://www.linkedin.com/in/rohitgurjar12/) · [GitHub](https://github.com/rohitgurjar12)
