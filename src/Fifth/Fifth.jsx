import React from "react";
import "./Fifth.css";
import macmini from "../assets/macmini.png";
import allmacs from "../assets/allmacs.png";
const Fifth = () => {
  return (
    <>
      <div className="fifth-container">
        <div className="fifth-left-container">
          <h1>Mac mini</h1>
          <h3>Size down. Power up.</h3>
          <div className="buttons">
            <button className="more-btn">Learn more</button>
            <button className="buy-btn">Buy</button>
          </div>
          <img className="macmini" src={macmini} alt="" />

          <h2>Built for Apple Intelligence</h2>
          <p>
            Available now in English<sup>1</sup>
          </p>
        </div>
        <div className="fifth-right-container">
          <h1>iMac</h1>
          <h3>
            Bri<span>lllll</span>iant.
          </h3>
          <div className="buttons">
            <button className="more-btn">Learn more</button>
            <button className="buy-btn">Buy</button>
          </div>
          <img className="allmacs" src={allmacs} alt="" />

          <h2>Built for Apple Intelligence</h2>
          <p>
            Available now in English<sup>1</sup>
          </p>
        </div>
      </div>
    </>
  );
};

export default Fifth;
