import React from 'react';
const CartPage = () => { 
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
        
          </ul>
        </nav>
        <div>
          <h1>Welcome to Our E-commerce Platform</h1>
          <input type="text" placeholder="Search products..." />
        </div>
      </header>
      <h2>Cart</h2>
      
    </div>
  );
};

export default CartPage;