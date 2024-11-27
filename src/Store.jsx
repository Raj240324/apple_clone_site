import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <div className="store-container">
      <div className="shop-list">
        <p>Shop</p>
        <ul>
          <li>Shop the latest</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Apple Watch</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="quick-link-container">
        <p>Quick Links</p>
        <ul>
          <li>Find a Store</li>
          <li>Order Status</li>
          <li>Ways to Buy</li>
        </ul>
      </div>
      <div className="special-container">
        <p>Shop Special Stores</p>
        <ul>
          <li>Education</li>
          <li>Business</li>
        </ul>
      </div>
    </div>
  );
};

export default Store;
