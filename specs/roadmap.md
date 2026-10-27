# Roadmap

High-level implementation order, in nano phases. Each phase is small enough to
finish in one sitting and ends with something you can verify. Do them in order;
do not start a phase until the previous one is done.

## Foundation

- [ ] **0.1 Runnable server**: add Fastify, `npm run dev` and `npm start`. *Done when* `GET /health` returns `{ "status": "ok" }`.
- [ ] **0.2 First page**: add Nunjucks and a base layout. *Done when* `GET /` renders a "Welcome to AgentClinic" page.
- [ ] **0.3 Styling pipeline**: add Tailwind and a build step. *Done when* the home page uses Tailwind classes.
- [ ] **0.4 Test harness**: add Vitest and one `inject()` test. *Done when* `npm test` passes.
- [ ] **0.5 Database connected**: add Prisma and SQLite with an empty schema. *Done when* a migration runs and the app connects.

## Agents

- [ ] **1.1 Agent model**: `Agent` table (name, model, created date). *Done when* the migration applies.
- [ ] **1.2 List agents**: `GET /agents` shows all agents. *Done when* seeded agents appear.
- [ ] **1.3 Register an agent**: form and `POST /agents`. *Done when* a new agent shows in the list.
- [ ] **1.4 Agent detail**: `GET /agents/:id`. *Done when* a single agent page renders, with a 404 for unknown ids.

## Ailments

- [ ] **2.1 Ailment model**: `Ailment` table (name, description, severity). *Done when* the migration applies.
- [ ] **2.2 List ailments**: `GET /ailments`. *Done when* seeded ailments appear.
- [ ] **2.3 Add an ailment**: form and `POST /ailments`. *Done when* it appears in the list.
- [ ] **2.4 Link ailment to agent**: an agent can have ailments. *Done when* they show on the agent detail page.

## Therapies

- [ ] **3.1 Therapy model**: `Therapy` table (name, description, duration). *Done when* the migration applies.
- [ ] **3.2 List therapies**: `GET /therapies`. *Done when* seeded therapies appear.
- [ ] **3.3 Add a therapy**: form and `POST /therapies`. *Done when* it appears in the list.
- [ ] **3.4 Match therapy to ailment**: an ailment lists suggested therapies. *Done when* they show on the ailment page.

## Appointments

- [ ] **4.1 Appointment model**: `Appointment` table (agent, therapy, start time). *Done when* the migration applies.
- [ ] **4.2 List appointments**: `GET /appointments`. *Done when* seeded appointments appear.
- [ ] **4.3 Book an appointment**: form and `POST /appointments`. *Done when* a booking appears in the list.
- [ ] **4.4 Prevent double booking**: reject overlapping times for the same therapy. *Done when* a conflicting booking shows an error.
- [ ] **4.5 Cancel an appointment**: *Done when* a cancelled booking disappears from the upcoming list.

## Dashboard

- [ ] **5.1 Dashboard shell**: `GET /dashboard` with navigation to every section. *Done when* all links work.
- [ ] **5.2 Today's appointments**: widget on the dashboard. *Done when* it lists only today's bookings.
- [ ] **5.3 Counts**: totals for agents, open ailments and upcoming appointments. *Done when* the numbers match the data.
- [ ] **5.4 Make `/` the dashboard entry point**: *Done when* the home page links straight to the dashboard.

## Polish

- [ ] **6.1 Branding and copy**: name, logo, humorous microcopy. *Done when* Steve signs off on the home page.
- [ ] **6.2 Responsive layout**: *Done when* every page is usable at phone width.
- [ ] **6.3 Empty and error states**: friendly messages and a 404 page. *Done when* no page shows a raw error.
- [ ] **6.4 Cross-browser check**: *Done when* the main flows work in current Chrome, Firefox, Safari and Edge.
- [ ] **6.5 README**: setup and run instructions. *Done when* a new developer can run the app from the README alone.
