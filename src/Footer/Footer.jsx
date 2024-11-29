import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const footerData = [
    {
      title: "Shop and Learn",
      items: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },

    {
      title: "Entertainment",
      items: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },

    {
      title: "Apple Store",
      items: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Group Reservations",
        "Apple Camp",
        "Apple Trade In",
        "Ways to Buy",
        "Recycling Programme",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "Apple Values",
      items: [
        "Accessibility",
        "Education",
        "Environment",
        "Privacy",
        "Supply Chain",
      ],
    },
    {
      title: "About Apple",
      items: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
    {
      title: "Apple Wallet",
      items: ["Wallet"],
    },
    {
      title: "For Business",
      items: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      items: [
        "Apple and Education",
        "Shop for Education",
        "Shop for University",
      ],
    },
    {
      title: "For Healthcare",
      items: [
        "Apple in Healthcare",
        "Mac in Healthcare",
        "Health on Apple Watch",
      ],
    },
    {
      title: "Account",
      items: ["Manage your Apple Account", "Apple Store Account", "iCloud.com"],
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-grid">
        {footerData.map((section, index) => (
          <div key={index} className="footer-column">
            <div className="footer-title" onClick={() => toggleDropdown(index)}>
              <strong>{section.title}</strong>
            </div>
            {(openDropdown === index || window.innerWidth > 768) && (
              <ul className="footer-list">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            )}
            <hr className="hr-ruler" />
          </div>
        ))}
      </div>

      <div className="list-call">
        <p>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 000800 040 1966.
        </p>
        <hr />
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2024 Apple Inc. All Rights Reserved.</p>
        <div className="link">
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
          <a href="#">India</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
