import React, { useState, useEffect } from 'react';
import './Navbar.css';
import apple_logo from '../assets/apple_logo.svg';
import search from '../assets/search.png';
import bag from '../assets/bag.png';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setVisible(false); // Hide navbar when scrolling down
    } else {
      setVisible(true);  // Show navbar when scrolling up
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div className={`navbar-container ${visible ? '' : 'hidden'}`}>
        <div className="apple-logo">
          <img className="logo" src={apple_logo} alt="Apple Logo" />
        </div>

        <ul className="list-container">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>

        <div className="search-bag-container">
          <img className="search-icon" src={search} alt="Search Icon" />
          <img className="bag-icon" src={bag} alt="Bag Icon" />
        </div>
      </div>
      <div className="para-content">
        <span>
          Get up to ₹10000.00 instant cashback with eligible cards.± Plus up to 12 months of No Cost EMI. <a href="Shop >">Shop</a>
        </span>
      </div>
    </>
  );
};

export default Navbar;






// import React, { useState } from "react";
// import "./Navbar.css";
// import apple_logo from "../assets/apple_logo.svg";
// import search from "../assets/search.png";
// import bag from "../assets/bag.png";


// const Navbar = () => {



//   return (
//     <>
//     <div className="navbar-container">
//       <div className="apple-logo">
//         <img className="logo" src={apple_logo} alt="" />
//       </div>

//       <ul className="list-container">
//         <li >Store</li>
//         <li>Mac</li>
//         <li>iPad</li>
//         <li>iPhone</li>
//         <li>Watch</li>
//         <li>AirPods</li>
//         <li>TV & Home</li>
//         <li>Entertainment</li>
//         <li>Accessories</li>
//         <li>Support</li>
//       </ul>

//       <div className="search-bag-container">
//         <img className="search-icon" src={search} alt="" />
//         <img className="bag-icon" src={bag} alt="" />
//       </div>
//     </div>
//     <div className="para-content">
//       <span>Get up to ₹10000.00 instant cashback with eligible cards.± Plus up to 12 months of No Cost EMI. <a href="Shop >">Shop</a></span>
//     </div>
//     </>
//   );
// };

// export default Navbar;


