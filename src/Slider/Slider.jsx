import React from "react";
import './Slider.css';
import { Carousel } from "antd";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";


const Slider = () => {
  return (
    <Carousel autoplay autoplaySpeed={2000}>
      <div className="sliding">
        <img src={slider1} alt="" />
      </div>
      <div className="sliding">
        <img src={slider2} alt="" />
      </div>
      <div className="sliding">
        <img src={slider3} alt="" />
      </div>
      <div className="sliding">
        <img src={slider4} alt="" />
      </div>
    </Carousel>
  );
};

export default Slider;
