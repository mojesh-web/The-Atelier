import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, User, LogOut } from 'lucide-react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { initGA, trackSearch, trackAddToCart } from './services/analytics';
import './index.css';

const MOCK_PRODUCTS = [
  { id: 1, name: "The Sculptural Tote", category: "Accessories", price: "₹45,000", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Cashmere Overcoat", category: "Outerwear", price: "₹1,20,000", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Pleated Silk Trousers", category: "Ready-to-Wear", price: "₹65,000", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Minimalist Loafers", category: "Footwear", price: "₹55,000", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop" }
];

const SkeletonCard = () => (
  <div className="product-card" aria-hidden="true">
    <div className="product-image-wrapper skeleton"></div>
    <div className="skeleton" style={{ height: '1.2rem', width: '70%', marginBottom: '0.5rem' }}></div>
    <div className="skeleton" style={{ height: '1rem', width: '40%' }}></div>
  </div>
);

const AppContent = () => {
  const { user, loginWithGoogle, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    initGA();
    // Simulate loading for skeleton screens
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    trackSearch(searchQuery);
    console.log("Searching for:", searchQuery);
  };

  const handleAddToCart = (product) => {
    trackAddToCart(product.name, parseInt(product.price.replace(/[^\d]/g, '')));
    alert(`Added ${product.name} to cart`);
  };

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="btn-icon" aria-label="Open Menu">
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="nav-brand" role="banner">The Atelier</div>
          
          <div className="nav-icons">
            <button className="btn-icon" aria-label="Search Products">
              <Search size={24} strokeWidth={1.5} />
            </button>
            
            {user ? (
              <div className="flex items-center gap-2">
                <span className="sr-only">Logged in as {user.displayName}</span>
                <button className="btn-icon" onClick={logout} aria-label="Log Out">
                  <LogOut size={24} strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <button className="btn-icon" onClick={loginWithGoogle} aria-label="User Login">
                <User size={24} strokeWidth={1.5} />
              </button>
            )}

            <button className="btn-icon" aria-label="Open Shopping Cart">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="sr-only">The Atelier - High-End Minimalist Fashion</h1>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
              alt="Artistically arranged hanging clothes in a minimalist atelier setting" 
              className="hero-image"
            />
          </div>
        </section>

        <section className="featured container" aria-labelledby="arrivals-title">
          <header className="section-header">
            <h2 id="arrivals-title" className="section-title">New Arrivals</h2>
            <p className="hero-subtitle">Meticulously Crafted Essentials</p>
          </header>
          
          <div className="new-arrivals-grid">
            {loading ? (
              Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
            ) : (
              MOCK_PRODUCTS.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={`Product image for ${product.name}`} 
                      className="product-image" 
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="product-price">{product.price}</span>
                      <button 
                        className="btn-icon" 
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container flex justify-between items-start">
          <div>
            <div className="footer-brand">The Atelier</div>
            <p>© 2024 THE ATELIER. All rights reserved.</p>
          </div>
          <nav className="flex gap-8" aria-label="Footer Navigation">
            <div className="flex flex-col gap-2">
              <a href="#boutiques">Boutiques</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#instagram">Instagram</a>
              <a href="#pinterest">Pinterest</a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
