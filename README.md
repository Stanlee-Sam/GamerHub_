GamerHub

GamerHub is a full-stack e-commerce platform focused on gaming consoles, gaming laptops, and accessories. It provides a modern shopping experience with browsing, filtering, cart management, and an admin panel for product management.

## Project Overview

GamerHub lets customers browse products (PS, Xbox, Nintendo Switch, gaming laptops, and accessories), filter by category, add/remove items to a cart, and complete typical shopping flows. Administrators can add and manage product listings via the admin UI.

Key capabilities:

- Modern landing page with product carousel and featured sections
- Shop views with category filters and product listings
- Add-to-cart, view cart, and remove-from-cart functionality
- Admin interface for adding and editing products (image upload supported)
- Backend API with Prisma-based database schema and Cloudinary file upload helper

## Tech Stack

- Frontend: React (Vite) — client/ folder
- Backend: Node.js + Express — server/ folder
- Database: Prisma (Postgres configured via `DATABASE_URL`)
- File storage: Cloudinary (see `server/utils/cloudinary.js`)

## Repo Structure (high level)

- `client/` — React app (Vite)
  - `src/` — app source
    - `components/` — UI components and pages (Home, Shop, Product, Admin, Login, Signup)
    - `slices/` — Redux or slice-based state (e.g. `productSlice.js`)
    - `utils/` — client helpers and config
  - `index.html`, `package.json`, `vite.config.js`
- `server/` — Express API
  - `controllers/` — request handlers (`products.controller.js`, `upload.controller.js`, `users.controllers.js`, etc.)
  - `routes/` — route definitions (`products.routes.js`, `upload.routes.js`, `users.routes.js`, etc.)
  - `prisma/` — Prisma schema and migrations (`schema.prisma`, `migrations/`)
  - `utils/` — helpers (`cloudinary.js`)
  - `index.js` — server entrypoint

## Notable files

- `client/src/components/Home/home.jsx` — landing/hero and featured products
- `client/src/components/Shop/shopapp.jsx` — shop listing and filters
- `client/src/components/Admin/admin.jsx` — admin product UI and `AddProduct.jsx`
- `server/controllers/products.controller.js` — product CRUD handlers
- `server/routes/products.routes.js` — product endpoints
- `server/prisma/schema.prisma` — database schema and relations
- `server/utils/cloudinary.js` — Cloudinary upload helper

## Environment variables

Create a `.env` file in the `server/` folder with at least:

```
DATABASE_URL=postgresql://user:pass@host:port/dbname
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
JWT_SECRET=your_jwt_secret
PORT=4000
```

Adjust variables depending on your database/provider. There may also be a `firebaseConfig` file in `server/routes/firebaseConfig.js` used for client integrations.

## Local development

1. Install dependencies for both client and server.

```bash
# from repo root
cd client
npm install

# in a second terminal
cd server
npm install
```

2. Run the development servers (concurrently or in two terminals):

```bash
# Start client (port usually 5173)
cd client
npm run dev

# Start server (port from .env, e.g., 4000)
cd server
npm run dev
```

3. Open the client URL (Vite prints it, commonly http://localhost:5173) and use the app. The frontend uses the server API for products, uploads, auth, and cart actions.

## Database & Migrations

This project uses Prisma. After setting `DATABASE_URL`:

```bash
cd server
npx prisma migrate dev --name init
npx prisma generate
```

## Admin & Uploads

- The Admin UI lives in `client/src/components/Admin/` and includes `AddProduct.jsx` for adding products.
- Image uploads are handled server-side (see `server/controllers/upload.controller.js` and `server/utils/cloudinary.js`). Make sure `CLOUDINARY_URL` or Cloudinary credentials are set.

## Build & Deploy

- Build the client:

```bash
cd client
npm run build
```

- For production, serve the built client with a static host or integrate with the server. Ensure `DATABASE_URL` and production Cloudinary credentials are set.

## Testing

There are no automated tests included by default. Manual checks:

- Browse products, filter categories, add/remove cart items.
- Test admin product creation and image upload.
- Verify Prisma migrations apply and database contains expected tables/models (`prisma/migrations/`).

## Contributing and Next Steps

- Improve product search and sorting
- Add authentication flows and protected admin routes
- Add E2E tests for shopping cart and admin flows
- Add CI pipeline for linting, tests, and deployment

If you'd like, I can add a development script to run client+server concurrently, or scaffold a `.env.example` and a short CONTRIBUTING guide.

---

Updated README generated from repository structure.
