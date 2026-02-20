# Day 4 – E-Commerce API

Node.js (Express) + MongoDB (Mongoose) CRUD API for Users, Categories, Products, and Carts.

## Quickstart

1. Install dependencies

```bash
npm i
```

2. Configure env

The repo already includes a `.env` with defaults:

- `PORT=8080`
- `DB_URI=mongodb://localhost:27017/ecommerce`
- `ACCESS_TOKEN_SECRET=...` (required for `/api/login`)
- `REFRESH_TOKEN_SECRET=...` (required for `/api/login`)

3. Run

```bash
npm run dev
```

Server runs on: `http://localhost:8080`

## API Documentation

See: `docs/api.md`
