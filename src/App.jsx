import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import productsData from './products.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    setCartItems(prev => prev.find(i => i.id === product.id) ? prev : [...prev, product]);
  };
  const handleRemove = (id) => setCartItems(prev => prev.filter(i => i.id !== id));
  const handleCheckout = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Premium Digital Tools</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          </div>
          <div className="flex justify-center mb-10">
            <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
              <button onClick={() => setActiveTab('products')} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'products' ? 'bg-purple-600 text-white shadow' : 'text-gray-600 hover:text-purple-600'}`}>
                Products
              </button>
              <button onClick={() => setActiveTab('cart')} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'cart' ? 'bg-purple-600 text-white shadow' : 'text-gray-600 hover:text-purple-600'}`}>
                Cart ({cartItems.length})
              </button>
            </div>
          </div>
          {activeTab === 'products' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} cartItems={cartItems} />
              ))}
            </div>
          )}
          {activeTab === 'cart' && (
            <Cart cartItems={cartItems} onRemove={handleRemove} onCheckout={handleCheckout} />
          )}
        </div>
      </section>
      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}
export default App;