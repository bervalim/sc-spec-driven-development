# Validation: Runnable server (roadmap 0.1)

The implementation is successful and can be merged when all of these pass.

## Build

- [ ] `npm run build` completes with no TypeScript errors (`strict` on).
- [ ] `dist/index.js`, `dist/app.js` and `dist/routes/health.js` exist.

## Dev mode

- [ ] `npm run dev` starts the server and logs that it is listening.
- [ ] `curl -i localhost:3000/health` returns `200` with body
      `{"status":"ok"}`.
- [ ] Editing a file under `src/` restarts the server automatically.

## Production mode

- [ ] After `npm run build`, `npm start` starts the server.
- [ ] `curl -i localhost:3000/health` returns `200` with body
      `{"status":"ok"}`.
- [ ] `PORT=4000 npm start` listens on 4000 instead.

## Behaviour

- [ ] An unknown path (e.g. `/nope`) returns Fastify's standard 404, not a crash.
- [ ] `buildApp()` can be imported without opening a port (needed for 0.4).

## Repo hygiene

- [ ] `dist/` and `node_modules/` are not committed (check `.gitignore`).
- [ ] `package-lock.json` is updated and committed.
- [ ] Phase 0.1 is ticked in `specs/roadmap.md`.
- [ ] Nothing from phases 0.2 and later was added.
