import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Layout/Hero';
import { Footer } from './components/Layout/Footer';
import { ProductCarousel } from './components/Product/ProductCarousel';
import { ProductModal } from './components/Product/ProductModal';
import { CartDrawer } from './components/Cart/CartDrawer';
import { FAQ } from './components/Sections/FAQ';
import { Documentation } from './components/Sections/Documentation';
import { FounderStory } from './components/Sections/FounderStory';
import { PRODUCTS, type Product } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // All unique categories from products
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <CartProvider>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Navbar />

        <main>
          <Hero />

          {/* Products Section */}
          <section style={{ padding: '80px 0 120px' }}>
            <div className="container">
              {/* Section Header */}
              <div style={{ marginBottom: 48 }}>
                <div className="prompt" style={{ fontSize: 16, marginBottom: 24 }}>
                  ls --category --sort=popularity
                </div>

                {/* Category Filter Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginLeft: 40
                }}>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        padding: '8px 20px',
                        fontSize: 13,
                        fontWeight: 600,
                        background: activeCategory === cat
                          ? 'var(--terminal-green)'
                          : 'transparent',
                        color: activeCategory === cat
                          ? 'var(--terminal-bg)'
                          : 'var(--terminal-green)',
                        border: `2px solid var(--terminal-green)`,
                        cursor: 'pointer',
                        fontFamily: 'JetBrains Mono',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (activeCategory !== cat) {
                          e.currentTarget.style.background = 'rgba(0, 255, 0, 0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeCategory !== cat) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      [{cat}]
                    </button>
                  ))}
                </div>

                {/* Selection Indicator */}
                <div style={{
                  marginTop: 16,
                  marginLeft: 40,
                  fontSize: 13,
                  color: 'var(--terminal-cyan)'
                }}>
                  {'> '}Current filter: <span style={{ color: 'var(--terminal-yellow)' }}>{activeCategory}</span>
                  {' '}({filteredProducts.length} tools)
                </div>
              </div>

              {/* Products Carousel */}
              <ProductCarousel
                products={filteredProducts}
                onSelectProduct={setSelectedProduct}
              />
            </div>
          </section>

          {/* Documentation Section */}
          {/* <Documentation /> */}

          {/* Founder Story Section */}
          {/* <FounderStory /> */}

          {/* FAQ Section */}
          {/* <FAQ /> */}
        </main>

        {/* Footer */}
        <Footer />

        <CartDrawer />

        <AnimatePresence>
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </CartProvider>
  );
}

export default App;
