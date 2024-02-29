import React from 'react';
import "../src/css/login.css"
import img from  "../src/pics/Screenshot 2024-02-29 185534.png"
import img2 from "./pics/lap.png"
import HeroCarousel from './carousel';

const Homepage = () => {
    const images = require.context('../src/pics', false, /\.(png|jpe?g|svg)$/);
    const categories = [
        { id: 1, name: 'Electronics', image: images('./elec.png') },
        { id: 2, name: 'Home & Kitchen', image: images('./home.png') },
        { id: 3, name: 'Sofa & Table', image:  images('./sofa.png') },
      ];
      const promotions = [
        { id: 1, imag: images('./offer.png'), description: 'Save up to 45% on selected items!' },
        { id: 2, imag: images('./air.png'), description: 'Limited-time offer: Up to 15% off on domestic flights!' },
        { id: 3, imag: images('./toys.png'), description: 'Flash sale: Up to 50% off on Toys!' },
      ];
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
      <section className="hero">
      <HeroCarousel />
        <div>
          <h2>Discover Great Deals!</h2>
          <p>Shop the latest trends and save big with our exclusive promotions.</p>
          <button>Shop Now</button>
        </div>
      </section>
      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Display featured products */}
          {/* Example product card */}
          <div className="product-card">
            <img src={img} alt="Product" style={{ width: '700px', height: '220px' }} />
            <h3>OPPO F25 5G</h3>
            <p>Rs 19,999</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={img2} alt="Product" style={{ width: '700px', height: '220px' }} />
            <h3>Lenovo LOQ Intel Core i5 12th Gen</h3>
            <p>Rs 41,999</p>
            <button>Add to Cart</button>
          </div>
          {/* Repeat the product card for each featured product */}
        </div>
      </section>

      {/* Promotions and Deals */}
      <section className="promotions">
        <h2>Special Promotions</h2>
        <div className="promotion-grid">
          {/* Display promotions and deals */}
          {promotions.map(promotion => (
            <div key={promotion.id} className="promotion-banner">
              <img src={promotion.imag} alt="Promotion" />
              <p>{promotion.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <h2>Product Categories</h2>
        <div className="category-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} style={{ width: '100%', height: 'auto' }} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div>
          <h4>About Us</h4>
          <p>We are developing this E-commerce website Userfriendly.</p>
        </div>
        <div>
    <h4>Useful Links</h4>
    <ul>
      <li><a href='ToS'>Terms of Service</a></li>
      <li><a href='pp'>Privacy Policy</a></li>
      <li><a href='contact'>Contact Us</a></li>
    </ul>
  </div>
  <div>
    <h4>Follow Us</h4>
    <ul>
      <li><a href='fb'>Facebook</a></li>
      <li><a href='x'>Twitter</a></li>
      <li><a href='insta'>Instagram</a></li>
    </ul>
  </div>
      </footer>
    </div>
  );
};

export default Homepage;
