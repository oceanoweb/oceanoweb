# Oceano Web

Marketing website for a Brazilian digital agency, built with Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.

## Cursor Cloud specific instructions

### Running the app

- **Dev server**: `pnpm dev` (runs on `http://localhost:3000`)
- **Build**: `pnpm build`
- **Start prod**: `pnpm start`

### Linting

- `pnpm lint` is defined in `package.json` as `eslint .` but **ESLint is not listed in `devDependencies`** and no ESLint config file exists. The lint command will fail with `eslint: not found`. The build still succeeds because `next.config.mjs` sets `typescript.ignoreBuildErrors: true`.

### Environment variables (optional)

- `RESEND_API_KEY` — needed only for the contact form email sending (via Resend API in `lib/send-email.ts`). Without it, the site loads fine but form submission returns an error.
- `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID. Without it, GA tracking is simply disabled.

### No test framework

This project has no automated test suite (no Jest, Vitest, or Playwright). Manual browser testing is the primary verification method.

### Peer dependency warnings

`pnpm install` will emit peer dependency warnings for `react-day-picker` (expects React 18 and date-fns v2/v3, but the project uses React 19 and date-fns v4). These are cosmetic and do not affect functionality.
