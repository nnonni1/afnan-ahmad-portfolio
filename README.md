# Afnan Ahmad Portfolio

Personal portfolio for Afnan Ahmad AlDuhaim — Technology Builder and Innovation Specialist. The site presents selected product, AI, IoT, robotics, training, and innovation-leadership work in an Arabic-first RTL experience.

The portfolio also includes a dedicated **How I Create Value** section that translates technical capabilities into practical value for organizations across product development, AI and automation, emerging technology, connected systems, and technical project leadership.

## Live portfolio

[afnan-ahmad-portfolio.vercel.app](https://afnan-ahmad-portfolio.vercel.app)

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and set the canonical production URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value is used to generate absolute social-sharing metadata. The site does not require secrets or external services.

## Deploy to Vercel

1. Create an independent GitHub repository named `afnan-ahmad-portfolio`.
2. Push this project as the repository root.
3. Import the repository into Vercel.
4. Keep the detected framework as **Next.js** and use the default build command, `npm run build`.
5. Add `NEXT_PUBLIC_SITE_URL` after Vercel assigns the production URL, then redeploy.
6. A personal domain can be connected later from Vercel project settings.

## Project boundaries

This repository is a standalone personal portfolio. It is not part of the Nawwsaj repository and does not require Nawwsaj source code or infrastructure.
