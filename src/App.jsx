import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Minus, Plus } from 'lucide-react';
import './index.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "The Sculptural Tote",
    category: "Accessories",
    price: 45000,
    priceStr: "₹45,000",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cashmere Overcoat",
    category: "Outerwear",
    price: 120000,
    priceStr: "₹1,20,000",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pleated Silk Trousers",
    category: "Ready-to-Wear",
    price: 65000,
    priceStr: "₹65,000",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Minimalist Loafers",
    category: "Footwear",
    price: 55000,
    priceStr: "₹55,000",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Linen Blend Blazer",
    category: "Outerwear",
    price: 85000,
    priceStr: "₹85,000",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Silk Evening Slip",
    category: "Ready-to-Wear",
    price: 75000,
    priceStr: "₹75,000",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
  }
];

function App() {
  // --- State ---
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('atelier_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem('atelier_cart', JSON.stringify(cart));
  }, [cart]);

  // --- Handlers ---
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // --- Derived Data ---
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="nav-icons"><Menu size={20} strokeWidth={1.5} /></button>
          </div>
          
          <div className="nav-brand">The Atelier</div>
          
          <div className="nav-icons flex items-center">
            <div className={`search-input-wrapper ${isSearchOpen ? 'open' : 'closed'}`}>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="nav-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={isSearchOpen}
              />
            </div>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
            </button>
            <button className="cart-toggle" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Only show Hero if not actively searching */}
        {!searchQuery && (
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
        )}

        {/* Featured / Search Results */}
        <section className="featured container" style={{ paddingTop: searchQuery ? '4rem' : '8rem' }}>
          <div className="section-header">
            <h2 className="section-title">{searchQuery ? `Results for "${searchQuery}"` : 'New Arrivals'}</h2>
            {!searchQuery && <a href="#" className="shop-all">Shop Collection</a>}
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-secondary" style={{ textAlign: 'center', padding: '4rem 0' }}>
              No products found matching your search.
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="card-overlay">
                      <button className="btn-add-cart" onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-category">{product.category}</p>
                    </div>
                    <span className="product-price">{product.priceStr}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
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

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your Shopping Bag</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={24} strokeWidth={1.5}/></button>
            </div>
            
            <div className="cart-items">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
                  Your bag is currently empty.
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.name}</h4>
                      <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                      
                      <div className="qty-controls">
                        <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}><Minus size={14}/></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14}/></button>
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          style={{ marginLeft: 'auto', textDecoration: 'underline', color: 'var(--text-secondary)' }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <button className="btn-checkout" onClick={() => { alert('Mock Checkout!'); setCart([]); setIsCartOpen(false); }}>
                  Checkout Securely
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
