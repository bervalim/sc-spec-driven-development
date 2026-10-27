# Tech Stack

Everything is TypeScript, and everything runs on the server. The browser gets
rendered HTML with a small amount of enhancement.

## Choices

| Concern | Choice | Why |
|---|---|---|
| Language | TypeScript (`strict`) | Mary's requirement; already configured in `tsconfig.json`. |
| Runtime | Node.js (current LTS) | Popular, stable, reliable. |
| Web framework | **Fastify** | Popular, fast, first-class TypeScript support, schema validation built in, mature plugin ecosystem. |
| Templates | Nunjucks via `@fastify/view` | Server-rendered HTML; simple and readable. |
| Interactivity | HTMX | Dashboard interactions without a client-side SPA. |
| Styling | Tailwind CSS | Fast route to an attractive, consistent UI (Steve). |
| Database | SQLite | Zero infrastructure to start. |
| ORM | Prisma | Typed queries and migrations; moves to PostgreSQL later by changing the provider. |
| Validation | Fastify JSON schema (with TypeBox) | One source of truth for request types and validation. |
| Tests | Vitest | Fast, TypeScript-native. Fastify's `inject()` for route tests. |
| Lint/format | ESLint + Prettier | Consistent code. |

## Why server-side rendering

- One language and one deployable, which keeps the site reliable.
- Pages work without a heavy client bundle, and render well in any modern browser.
- HTMX gives enough interactivity for a dashboard (inline forms, partial updates).

## Conventions

- Source lives in `src/`, compiled to `dist/` (`npm run build`).
- Layout: `src/routes/`, `src/views/`, `src/db/`, `src/lib/`.
- Prisma schema in `prisma/schema.prisma`.
- Config comes from environment variables, with a `.env.example` committed.
- No secrets in the repository.

## Browser support

Current versions of Chrome, Firefox, Safari and Edge. No legacy support.

## Deliberately not chosen (for now)

- A client-side SPA framework (React/Next.js): more moving parts than the dashboard needs.
- PostgreSQL: can replace SQLite when real load or hosting requires it.
- An auth provider: out of scope until the mission expands.
