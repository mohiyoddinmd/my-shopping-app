import React from 'react';

const Header = ({ setCategory, viewCart }) => {
  return (
    <div className='headerSection'>
      <div className="left">
        <div className="title">My Fashion Store</div>
      </div>

      <div className="center">
        <ul>
          <li onClick={() => setCategory('women')}>WOMEN</li>
          <li onClick={() => setCategory('men')}>MEN</li>
          <li onClick={() => setCategory('kids')}>KIDS</li>
          <li onClick={() => setCategory('beauty')}>BEAUTY</li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="search..." />
      </div>

      <div className="right">
        <div className="signin">Signin/Signup</div>
        <div className="cart" onClick={viewCart}>CART</div>
      </div>
    </div>
  );
};

export default Header;
