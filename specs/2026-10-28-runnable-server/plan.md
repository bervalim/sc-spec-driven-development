# Plan: Runnable server (roadmap 0.1)

## 1. Dependencies and scripts

1. Install `fastify` and `@fastify/static` as dependencies.
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

## 5. Main layout component

1. Create the three subcomponents as functions returning HTML strings:
   - `src/views/components/header.ts`: `header(title)` renders `<header class="site-header">` with the brand link.
   - `src/views/components/main.ts`: `main(content)` renders `<main class="site-main">` around the page content.
   - `src/views/components/footer.ts`: `footer()` renders `<footer class="site-footer">` with the copyright line.
2. Create `src/views/layout.ts` exporting `layout(title, content)`, which composes
   header, main and footer into a full HTML document.
3. Create the stylesheet `public/css/main.css` (colour variables, sticky-footer
   body layout, styles for `.site-header`, `.site-main`, `.site-footer`).
4. Link it: `layout()` emits `<link rel="stylesheet" href="/css/main.css">` in `<head>`.
5. Import it into the app: in `src/app.ts` register `@fastify/static` with
   `public/` as root so `/css/main.css` is served.
6. Create `src/routes/home.ts` registering `GET /`, which returns
   `layout('Home', '<h1>Welcome to AgentClinic</h1>')` as `text/html`, and
   register it in `src/app.ts`.

## 6. Verify

1. Run every check in `validation.md`.
2. `GET /` returns the layout with header, main and footer, and `GET /css/main.css` returns 200 `text/css`.
3. Tick off 0.1 in `specs/roadmap.md`.
4. Commit on branch `0.1-runnable-server`.
