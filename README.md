# AyamuLabs - Creative Studio Platform

AyamuLabs is a modern, dynamic web platform designed for a creative studio. It features a seamless commission ordering system, an interactive portfolio, and a client dashboard for tracking project status. Built with a focus on aesthetics and user experience, using the latest web technologies.

## 🐣 Features

- **Creative Portfolio**: Showcase works with a responsive and animated gallery.
- **Commission System**: Streamlined flow for clients to order commissions.
- **Order Tracking**: Dedicated tracker for clients to check the status of their commissions in real-time.
- **Studio Dashboard**: Internal tools for managing orders, including Kanban boards and order details.
- **Modern Design**: "Hatching Creativity" theme with smooth animations and responsive layout.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Application source code (App Router structure).
  - `(auth)`: Authentication specifics.
  - `(studio)`: Dashboard and management interfaces.
  - `portfolio/`: Public portfolio pages.
  - `commission/`: Commission ordering flow.
  - `tracker/`: Public order tracking pages.
- `components/`: Reusable UI components.
  - `ui/`: Fundamental UI blocks.
- `public/`: Static assets.

## 📝 License

[MIT](LICENSE)
