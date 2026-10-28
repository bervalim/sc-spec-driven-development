# Plan: Runnable server (roadmap 0.1)

## 1. Dependencies and scripts

1. Install `fastify` as a dependency.
2. Install `tsx` and `@types/node` as dev dependencies.
3. In `package.json`, add scripts:
   - `"dev": "tsx watch src/index.ts"`
   - `"start": "node dist/index.js"`
   - keep `"build": "tsc"`.

## 2. App factory

1. Create `src/app.ts` exporting `buildApp()` that creates a Fastify instance
   (logger enabled) and registers the routes plugin.
2. Do not call `listen()` in this file.

## 3. Health route

1. Create `src/routes/health.ts` as a Fastify plugin registering `GET /health`.
2. Return `{ status: 'ok' }` with a response schema for the 200 case.

## 4. Server entry point

1. Replace the contents of `src/index.ts` with code that builds the app and
   listens on `PORT` (default 3000) and `HOST` (default `0.0.0.0`).
2. On listen failure, log the error and exit with code 1.

## 5. Verify

1. Run every check in `validation.md`.
2. Tick off 0.1 in `specs/roadmap.md`.
3. Commit on branch `0.1-runnable-server`.
