import React from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import './index.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "The Sculptural Tote",
    category: "Accessories",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cashmere Overcoat",
    category: "Outerwear",
    price: "₹1,20,000",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pleated Silk Trousers",
    category: "Ready-to-Wear",
    price: "₹65,000",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Minimalist Loafers",
    category: "Footwear",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
  }
];

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="nav-icons"><Menu size={20} strokeWidth={1.5} /></button>
          </div>
          
          <div className="nav-brand">The Atelier</div>
          
          <div className="nav-icons">
            <button><Search size={20} strokeWidth={1.5} /></button>
            <button><ShoppingBag size={20} strokeWidth={1.5} /></button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero container">
          <div className="hero-subtitle">Spring / Summer 2024</div>
          <h1 className="hero-title">The Sculptural<br />Silhouette</h1>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
              alt="Editorial Fashion" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <a href="#" className="shop-all">Shop Collection</a>
          </div>
          
          <div className="product-grid">
            {MOCK_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div>
            <div className="footer-brand">The Atelier</div>
            <p>Crafting quiet luxury since 2024.</p>
          </div>
          <div className="flex gap-8">
            <div className="flex-col gap-4">
              <a href="#">Boutiques</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex-col gap-4">
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
