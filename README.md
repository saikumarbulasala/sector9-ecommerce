<div align="center">

# 🛍️ Sector 9 — Modern E-Commerce Storefront

### A responsive, animated React storefront for streetwear retail

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-View_App-2ea44f?style=for-the-badge)](https://sector9-ecommerce.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](#license)

</div>

---

## 🧠 What is Sector 9?

Sector 9 is a mobile-first e-commerce storefront built with React, focused on smooth navigation, a responsive layout across devices, and a fast, no-reload shopping experience. It's built around a modern streetwear retail concept, with category browsing, product filtering, and a persistent shopping cart.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🛍️ **Category & Price Filtering** | Instant client-side filtering across Men/Women/Kids and price tiers, no network round-trip |
| 🛒 **Global Cart State** | Centralized cart context handles add/update/remove with a single source of truth |
| 🎨 **Animated UI** | Page transitions and micro-interactions powered by Framer Motion |
| 📱 **Fully Responsive** | Mobile-first layout that adapts cleanly across phone, tablet, and desktop |
| 🧭 **Client-Side Routing** | Single-page navigation with dynamic product routes via React Router DOM v6 |
| 🧩 **Component-Driven Architecture** | Modular, reusable components following DRY principles |

---

🛠️ Tech Stack

<div align="center">
<table>
<tr>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="45" height="45" alt="HTML5"/><br><b>HTML5</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="45" height="45" alt="CSS3"/><br><b>CSS3</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45" height="45" alt="JavaScript"/><br><b>JavaScript</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="45" height="45" alt="React"/><br><b>React</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="45" height="45" alt="Bootstrap"/><br><b>Bootstrap</b></td>
</tr>
<tr>
<td align="center" width="90"><img src="https://cdn.simpleicons.org/framer/0055FF" width="45" height="45" alt="Framer Motion"/><br><b>Framer Motion</b></td>
<td align="center" width="90"><img src="https://cdn.simpleicons.org/reactrouter/CA4245" width="45" height="45" alt="React Router"/><br><b>React Router</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="45" height="45" alt="Vercel"/><br><b>Vercel</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="45" height="45" alt="Git"/><br><b>Git</b></td>
<td align="center" width="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="45" height="45" alt="GitHub"/><br><b>GitHub</b></td>
</tr>
</table>
</div>

---

## 🏗️ Architecture Overview

```
App
 ├── CartContext (global state: add / update / remove items)
 ├── Router (React Router v6)
 │     ├── Home            → category browsing, hero, promos
 │     ├── Product Listing → in-memory filter + sort by category/price
 │     ├── Product Detail  → dynamic route via product ID
 │     └── Cart            → reads from CartContext, handles checkout flow
 └── Shared Layout (persistent navbar + footer across route changes)
```

Cart state lives in a single context provider so any component can read or mutate it without prop drilling — keeping unrelated components from re-rendering on every cart update.

---

## 📂 Project Structure

```text
sector9-ecommerce/
├── public/
├── src/
│   ├── components/     # Navbar, ProductCard, CartItem, etc.
│   ├── context/         # CartContext provider
│   ├── data/            # Product catalog (JSON)
│   ├── pages/           # Home, Shop, ProductDetail, Cart
│   ├── routes/          # Route definitions
│   └── App.jsx
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/saikumarbulasala/sector9-ecommerce.git
cd sector9-ecommerce
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

The app runs by default at:

```text
http://localhost:3000
```

### 4. Build for production

```bash
npm run build
```

---

## ⚡ Performance Notes

- No heavy state-management library — cart logic is handled with React Context, keeping the bundle lean
- Product data is loaded client-side from a local JSON catalog, avoiding API latency for browsing/filtering
- Framer Motion transitions are scoped to route/page level to avoid unnecessary re-renders on unrelated components

---

## 🗺️ Roadmap

- [ ] Connect to a real backend/CMS for product data
- [ ] Add persistent cart (localStorage or backend-synced)
- [ ] Wishlist and product reviews
- [ ] Checkout and payment integration
- [ ] Search with debounced querying

---

<div align="center">
Built with ❤️ to explore fast, animated, and clean UI patterns for modern e-commerce.
</div>
