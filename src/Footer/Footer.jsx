import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleDropdown = () => {
    if (window.innerWidth <= 768)
    setIsOpen(!isOpen); };




  return (
    <>
    <div className="footer-container">
      <div className="alllist-container">
        <ul className="first-list">
          <li onClick={toggleDropdown}>
            <strong>Shop and learn</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">iPad</a>
          </li>
          <li>
            <a href="">iPhone</a>
          </li>
          <li>
            <a href="">Watch</a>
          </li>
          <li>
            <a href="">AirPods</a>
          </li>
          <li>
            <a href="">TV & Home</a>
          </li>
          <li>
            <a href="">AirTag</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          </div>
          )}
        <hr />
          <li onClick={toggleDropdown}>
            <strong>Apple Wallet</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Wallet</a>
          </li>
          </div>
          )}
        </ul>
        <hr />
        <ul className="second-list">
          <li onClick={toggleDropdown}>
            <strong>Account</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Manage your Apple Account</a>
          </li>
          <li>
            <a href="">Apple Store Account</a>
          </li>
          <li>
            <a href="">iCloud.com</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          </div>
          )}
          <hr />
          <li onClick={toggleDropdown}>
            <strong>Entertainment</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Apple1</a>
          </li>
          <li>
            <a href="">AppleTV+</a>
          </li>
          <li>
            <a href="">Apple Music</a>
          </li>
          <li>
            <a href="">Apple Arcade</a>
          </li>
          <li>
            <a href="">Apple Podcasts</a>
          </li>
          <li>
            <a href="">Apple Books</a>
          </li>
          <li>
            <a href="">Apple Store</a>
          </li>
          </div>
          )}
        </ul>
        <hr />
        <ul className="third-list" >

      
          <li onClick={toggleDropdown}>
            <strong>Apple Store</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Find a Store</a>
          </li>
          <li>
            <a href="">Genius bar</a>
          </li>
          <li>
            <a href="">Today at Apple</a>
          </li>
          <li>
            <a href="">Group Reservations</a>
          </li>
          </div>
        )}
         <hr />
          <li onClick={toggleDropdown}>
            <strong>Apple Camp</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Apple Trade In</a>
          </li>
          <li>
            <a href="">Ways to Buy</a>
          </li>
          <li>
            <a href="">Recycling Programme</a>
          </li>
          <li>
            <a href="">Order Status</a>
          </li>
          <li>
            <a href="">Shopping Help</a>
          </li>
          <li>
            <a href="">Apple Books</a>
          </li>
          <li>
            <a href="">Apple Store</a>
          </li>
          </div>
          )}
        </ul>
        <hr />
        <ul className="fourth-list">
          <li onClick={toggleDropdown}>
            <strong>For Business</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Apple and Business</a>
          </li>
          <li>
            <a href="">Shop for Business</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          </div>)}
          <hr />
          <li onClick={toggleDropdown}>
            <strong>For Education</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <>Apple and Education</>
          </li>
          <li>
            <a href="">Shop for Education</a>
          </li>
          <li>
            <a href="">Shop for University</a>
          </li>
         </div>)}
         <hr />
          <li onClick={toggleDropdown}>
            <strong>For Healthcare</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Apple in Healthcare</a>
          </li>
          <li>
            <a href="">Mac in Healthcare</a>
          </li>
          <li>
            <a href="">Health on Apple Watch</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          </div>)}
        </ul>
        <hr />
      
        <ul className="fifth-list">
          <li onClick={toggleDropdown}>
            <strong>Apple Values</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Accessibility</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Environment</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Supply Chain</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          </div>)}
          <hr />
          <li onClick={toggleDropdown}>
            <strong>About Apple</strong>
          </li>
          {isOpen && (
            <div className="dropdown-content">
          <li>
            <a href="">Newsroom</a>
          </li>
          <li>
            <a href="">Apple Leadership</a>
          </li>
          <li>
            <a href="">Career Oppurtunities</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
          <li>
            <a href="">Ethics & Compliance</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Contact Apple</a>
          </li>
          </div>)}
        </ul>
        <hr />
      </div>

      <div className="list-call">
        <p>
          More ways to shop: <a href="">Find an Apple Store</a> or{" "}
          <a href="">other retailer</a> near you. Or call 000800 040 1966.
        </p>
        <hr />
      </div>
 

      <div className="copyright">
        <p>Copyright &copy; 2024 Apple Inc All Rights Reserved.</p>
        <div class="link">
          <a href="#privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms-of-use">Terms of Use</a>
          <span>|</span>
          <a href="#sales-policy">Sales Policy</a>
          <span>|</span>
          <a href="#legal">Legal</a>
          <span>|</span>
          <a href="#site-map">Site Map</a>
        </div>
        <div className="india-link">
          <a href="">India</a>
        </div>
      </div>
      </div>
    
    </>
  );
};

export default Footer;
