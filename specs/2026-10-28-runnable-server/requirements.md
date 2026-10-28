# Requirements: Runnable server (roadmap 0.1)

## Goal

Get a Fastify server running locally so later phases (views, styling, tests,
database) have something to build on. *Done when* `GET /health` returns
`{ "status": "ok" }`.

## Scope

In scope:

- Add `fastify` as a dependency.
- Add `tsx` as a dev dependency and `@types/node`.
- `npm run dev` (watch mode) and `npm start` (compiled output).
- `GET /health` returning `{ "status": "ok" }` with HTTP 200.
- Split the app factory from the server entry point.

Out of scope (later phases):

- Nunjucks / views (0.2), Tailwind (0.3), Vitest (0.4), Prisma/SQLite (0.5).
- ESLint / Prettier setup.
- `.env.example` and a config module. `PORT` and `HOST` are read directly
  from `process.env` with defaults.

## Decisions

- **Dev workflow**: `tsx watch src/index.ts` for `npm run dev`.
- **Production workflow**: `npm run build` (`tsc`) then `node dist/index.js`
  for `npm start`.
- **Layout**: `src/app.ts` exports `buildApp()` which returns a configured
  Fastify instance without listening. `src/index.ts` calls `buildApp()` and
  `listen()`. This lets phase 0.4 use `inject()` without starting a port.
- **Defaults**: `PORT=3000`, `HOST=0.0.0.0`; overridable via environment.
- **Route placement**: `/health` lives in `src/routes/health.ts` as a Fastify
  plugin, following the `src/routes/` convention.
- **Response schema**: use a JSON schema on the route for the response shape
  (TypeBox adoption deferred until request validation is needed).
- **TypeScript**: keep `strict`. Module system stays CommonJS as in the
  current `tsconfig.json`.

## Context

- `specs/mission.md`: the product must be dependable; `/health` is the first
  reliability hook.
- `specs/tech-stack.md`: Fastify, TypeScript strict, source in `src/`,
  compiled to `dist/`, routes in `src/routes/`.
- Current state: `src/index.ts` only logs a message; `package.json` has
  only `build` and the `typescript` dev dependency.
