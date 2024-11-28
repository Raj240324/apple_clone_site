import React from "react";
import "./Fourth.css";
import apple_logo from "../assets/applelogoblack.png";
import watch from "../assets/watch.png";
import person from "../assets/person.png";
const Fourth = () => {
  return (
    <>
      <div className="fourth-container">
        <div className="fourth-left-container">
          <div className="logo-container">
            <img src={apple_logo} alt="" />
            <h1>WATCH</h1>
          </div>
          <h3>SERIES 10</h3>
          <h2>Thinstant classic.</h2>
          <div className="buttons">
            <button className="more-btn">Learn more</button>
            <button className="buy-btn">Buy</button>
          </div>
          <img className="watch" src={watch} alt="" />
        </div>
        <div className="fourth-right-container">
          <img className="person" src={person} alt="" />
        </div>
      </div>
    </>
  );
};

export default Fourth;
