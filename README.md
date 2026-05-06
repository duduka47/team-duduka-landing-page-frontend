# TEAM DUDUKA — Landing Page

Official landing page for **TEAM DUDUKA**, a technology company that develops apps, systems, websites, and automations. Built with React Router v7, TailwindCSS, and Motion.

🌐 **Live:** [teamduduka.com](https://teamduduka.com)

---

## Tech Stack

- ⚛️ React Router v7 — SSR and routing
- 🎨 TailwindCSS — styling
- 🎞️ Motion/React — animations
- 🌍 i18next — internationalization (PT, EN, ES)
- 📘 TypeScript

---

## Features

- Fully responsive (mobile, tablet, desktop)
- Internationalization with PT, EN and ES support
- Contact form with WhatsApp redirect
- Scroll-triggered animations
- Team section with real member profiles
- Portfolio with live project links

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/teamduduka/landing-page
cd landing-page
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_E_COMMERCE_APP_PORTFOLIO_URL=
VITE_MANAGEMENT_APP_PORTFOLIO_URL=
VITE_TEAM_DUDUKA_LANDING_PAGE_GITHUB_URL=
VITE_TEAM_MEMBER_1_IMAGE_URL=
VITE_TEAM_MEMBER_2_IMAGE_URL=
VITE_TEAM_MEMBER_3_IMAGE_URL=
```

### Development

```bash
npm run dev
```

Available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

├── app/
│   ├── components/       # Reusable UI components
│   │   ├── form/         # Contact form and inputs
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── MemberCard.tsx
│   │   ├── PortfolioLink.tsx
│   │   ├── StepCard.tsx
│   │   └── HowItWorksCard.tsx
│   ├── locales/          # Translation files (en, pt, es)
│   ├── HomePage.tsx      # Main page + action
│   └── root.tsx
├── public/
└── package.json

---

## Internationalization

The site supports three languages. Translation files are located in `app/locales/`:

locales/
├── en/translation.json
├── pt/translation.json
└── es/translation.json

To add a new language, create a new folder with the locale code and add a `translation.json` file following the same structure.

---

## Deployment

Deployed on **Vercel**. Any push to `main` triggers a new deployment.

To deploy manually:

```bash
npm run build
```

Then follow the [Vercel deployment guide](https://vercel.com/docs).

---

## Contributing

This is an open source project. Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

MIT License — feel free to use this project as a reference or template.

---

Built with ❤️ by [TEAM DUDUKA](https://teamduduka.com)