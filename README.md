# elf.co

&nbsp;

elf.co is a collection of party planning tools for the Christmas season, developed as a group project at the end of the Dev Academy Aotearoa bootcamp. This build only contains the Secret Santa tool, which allows users to create and participate in Secret Santa events.

&nbsp;

## Getting Started 🍌

---

&nbsp;
&nbsp;

To run the Secret Santa tool, follow these steps:

&nbsp;

1. Clone the repository

```bash
git clone https://github.com/HartJN/elfco-secret-santa-only.git
```

&nbsp;

2. Install dependencies

```bash
npm install
```

&nbsp;

3. Run the migrations and seed the database

```bash
npm run db:migrate
npm run db:seed
```

&nbsp;

4. Start the server and client

```bash
npm run dev:server
npm run dev:client
```

&nbsp;

5. View the project on http://localhost:5173

&nbsp;

&nbsp;
&nbsp;

## Features

- Secret Santa events are created and managed using unique IDs (UUIDs)
- Participants can enter their event name, date, and budget
- Each participant can create a wish list, which is saved using a UUID
- The event host can view the dashboard and draw names to assign gift partners
- Gift partners are assigned using a Fisher–Yates shuffle algorithm
- Participants can view their gift partner and their partner's wish list

&nbsp;

## Technologies

&nbsp;

elf.co uses the following technologies:

&nbsp;

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Superagent](https://github.com/ladjs/superagent)

### Backend

- [UUID](https://www.npmjs.com/package/uuid)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/index.html)

### Testing

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [nock](https://github.com/nock/nock)
- [supertest](https://github.com/visionmedia/supertest)

&nbsp;

## Testing

&nbsp;

To run the test suite, use the following command:

&nbsp;

```bash
npm run test
```
