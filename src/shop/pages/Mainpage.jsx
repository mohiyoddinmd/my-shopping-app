import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collections from '../components/Collections';
import { men, women, kids, beauty } from '../data';
import Cart from '../components/Cart';

const MainPage = () => {
  const [category, setCategory] = useState('women');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const getCategoryData = () => {
    switch (category) {
      case 'men': return men;
      case 'kids': return kids;
      case 'beauty': return beauty;
      default: return women;
    }
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Header setCategory={setCategory} viewCart={() => setShowCart(true)} />
      {showCart ? (
        <Cart cartItems={cart} onBack={() => setShowCart(false)} onClear={clearCart} />
      ) : (
        <Collections fashion={getCategoryData()} onAdd={handleAddToCart} />
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
