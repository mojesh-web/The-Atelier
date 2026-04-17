# Lumina: E-Commerce Personal Shopping Assistant

Lumina is a premium, mobile-first e-commerce web application featuring a simulated AI shopping assistant, robust cart functionality, and a dedicated retailer dashboard for inventory management and demand forecasting.

## Features

*   **AI Shopping Assistant**: An interactive chat interface that parses user intent (categories, budgets, and style tags) to recommend personalized products from the mock catalog.
*   **Responsive Product Grid**: Beautifully styled product cards with mock data, dynamic stock alerts, and inline "Add to Cart" functionality.
*   **Retailer Dashboard**: A dedicated view (toggled from the navbar) providing KPIs, an inventory management table, and a Chart.js powered Demand Forecast graph.
*   **Cart & Checkout**: Slide-out cart panel to adjust quantities, see total prices in INR (₹), and simulate checkout.
*   **Personalization Engine**: Automatically extracts styles and preferences from chat and persists them in `localStorage`.
*   **Premium UI**: Sleek, modern design with dark/light mode toggle, smooth CSS animations, glassmorphism elements, and glowing aesthetic touches.

## Tech Stack

*   **Frontend Framework**: React (scaffolded via Vite)
*   **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Animations)
*   **Icons**: Lucide React
*   **Data Visualization**: Chart.js / react-chartjs-2
*   **State Management**: React Context API & `localStorage`
*   **Data**: Static JSON catalog

## Quick Setup Guide

1.  **Install Dependencies**
    Make sure you have Node.js installed, then run:
    ```bash
    npm install
    ```

2.  **Start the Development Server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173/`.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Usage

*   **Chat**: Try typing phrases like *"I want some eco-friendly running shoes under 5000"* or *"Show me premium headphones"*.
*   **Dashboard**: Click the Dashboard icon (left of the cart) in the top navigation bar to access the retailer view.
*   **Dark Mode**: Click the Sun/Moon icon to toggle between light and dark themes.

---
Built for Hackathon Demonstration.
