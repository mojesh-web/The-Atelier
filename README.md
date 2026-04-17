# The Atelier

A premium AI-powered e-commerce shopping assistant built for modern retail experiences.  
The Atelier combines intelligent product search, personalized recommendations, add-to-cart workflows, wishlist management, and a futuristic UI to create a hackathon-ready shopping platform.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview

The Atelier is a modern retail and e-commerce web application designed to improve the online shopping experience through smart product discovery, interactive shopping flows, and a polished visual interface.

The application focuses on:
- Fast product search.
- Intelligent filtering and personalization.
- Smooth cart and checkout interactions.
- A premium UI that feels modern and futuristic.
- A scalable architecture that can be extended with real APIs, authentication, and payments.

This project is ideal for hackathons, portfolios, and demo presentations because it combines strong visuals with practical shopping functionality.

## Features

- Search products by name, category, tags, and keywords.
- Filter products by price, rating, availability, and category.
- Add products to cart with quantity controls.
- Remove items from cart.
- Wishlist support.
- Product detail modal / quick view.
- Persistent cart and wishlist using `localStorage`.
- Recommended products based on browsing and cart activity.
- Responsive, mobile-first UI.
- Dark mode and modern glassmorphism design.
- Smooth animations and micro-interactions.

## Architecture

The application follows a component-based frontend architecture.

### Presentation Layer
Handles everything the user sees and interacts with:
- Hero section.
- Search bar.
- Product grid.
- Cart drawer / cart page.
- Product detail modal.
- Wishlist section.
- Dashboard panels.

### State Management Layer
Manages application data such as:
- Product catalog.
- Search query.
- Selected filters.
- Cart items.
- Wishlist items.
- Recently viewed products.
- UI states like modal open/close.

This layer can be implemented using React state, Context API, or a lightweight state store.

### Data Layer
Provides product and user interaction data:
- Mock JSON product dataset.
- Local storage persistence.
- Future support for backend APIs.
- Optional integration with real inventory and payment services.

### Business Logic Layer
Contains core shopping operations:
- Search matching.
- Filter combination logic.
- Cart quantity updates.
- Price calculation.
- Recommendation generation.
- Wishlist handling.

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS / Tailwind / custom modern UI styles
- **State Handling:** React Hooks / Context API
- **Data Storage:** LocalStorage
- **Charts:** Chart.js or Recharts
- **Icons:** Lucide React or similar
- **Deployment:** Vercel / Netlify

## Project Structure

```bash
The-Atelier/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── Wishlist.jsx
│   │   └── ProductModal.jsx
│   ├── data/
│   │   └── products.json
│   ├── hooks/
│   ├── utils/
│   │   ├── filterProducts.js
│   │   ├── searchProducts.js
│   │   └── cartHelpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js installed
- npm installed

### Installation

```bash
git clone https://github.com/mojesh-web/The-Atelier.git
cd The-Atelier
npm install
```

### Run the project

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## Configuration

If your project uses environment variables later, create a `.env` file:

```env
VITE_API_URL=
VITE_APP_NAME=The Atelier
```

For now, the app works with mock data and local storage only.

## Usage

1. Open the app in your browser.
2. Search for products using the search bar.
3. Apply filters to narrow down results.
4. Click **Add to Cart** to add an item.
5. Open the cart to change quantities or remove items.
6. Save products to wishlist for later.
7. View recommended products based on your activity.

## Future Improvements

- Add authentication and user accounts.
- Connect to a real backend database.
- Integrate payment gateway support.
- Add admin dashboard for inventory management.
- Enable real-time stock updates.
- Add AI-powered semantic product search.
- Add order tracking and delivery status.

## License

This project is developed for educational and hackathon purposes.

---

Built with care for a modern shopping experience.
