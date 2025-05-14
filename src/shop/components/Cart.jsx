import React, { useState } from 'react';

const Cart = ({ cartItems, onBack, onClear }) => {
  const [discount, setDiscount] = useState(0);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
  };

  const getDiscountedTotal = () => {
    const total = getTotal();
    return total - (total * discount / 100);
  };

  return (
    <div className="cartPage">
      <h2>Cart Items</h2>
      <button onClick={onBack}>Back to Shopping</button>
      <div className="cartItems">
        {cartItems.map((item, index) => (
          <div key={index} className="cartItem">
            <img src={item.image} alt="cartItem" style={{ width: '200px', height: '200px' }} />
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Total: ₹{getTotal().toFixed(2)}</h3>
        <div>
          <button onClick={() => setDiscount(10)}>Apply 10% Discount</button>
          <button onClick={() => setDiscount(20)}>Apply 20% Discount</button>
        </div>
        {discount > 0 && (
          <h4>Discounted Total: ₹{getDiscountedTotal().toFixed(2)}</h4>
        )}
        <button style={{ marginTop: '10px' }} onClick={() => alert("Thanks for buying!")}>Buy</button>
        <button style={{ marginLeft: '10px' }} onClick={onClear}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
