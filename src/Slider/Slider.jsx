import React from "react";
import "./Slider.css";
import { Carousel } from "antd";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";

const Slider = () => {
  return (
    <>
    
      <Carousel 
        arrows 
        infinite 
        autoplay 
        autoplaySpeed={2000} 
        nextArrow={<div className="custom-arrow custom-arrow-next" />} 
        prevArrow={<div className="custom-arrow custom-arrow-prev" />}
      >
        <div className="sliding">
          <img src={slider1} alt="Slider 1" />
        </div>
        <div className="sliding">
          <img src={slider2} alt="Slider 2" />
        </div>
        <div className="sliding">
          <img src={slider3} alt="Slider 3" />
        </div>
        <div className="sliding">
          <img src={slider4} alt="Slider 4" />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
