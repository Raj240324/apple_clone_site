import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Fourth.css";
import apple_logo from "../assets/applelogoblack.png";
import watch from "../assets/watch.png";
import personfull1 from "../assets/personfull1.png";
const Fourth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
            <button className="more-btn">
              <a
                href="https://www.apple.com/in/apple-watch-series-10/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Learn more
              </a>
            </button>

            <Button className="buy-btn" type="primary" onClick={showModal}>
              {" "}
              Buy{" "}
            </Button>
            <Modal
              title="Purchase Confirmation"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Are you sure you want to purchase this item?</p>
            </Modal>
          </div>
          <img className="watch" src={watch} alt="" />
        </div>
        <div className="fourth-right-container">
          <img className="person" src={personfull1} alt="" />
          <div className="fourth-right-content">
            <h3>AirPods 4</h3>
            <h4>Iconic. Now Supersonic.</h4>
            <h4>Available with Active Noise Cancellation.<sup>2</sup></h4>

            <div className="buttons">
            <button className="more-btn">
              <a
                href="https://www.apple.com/in/airpods-4/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Learn more
              </a>
            </button>

            <Button className="buy-btn" type="primary" onClick={showModal}>
              {" "}
              Buy{" "}
            </Button>
            <Modal
              title="Purchase Confirmation"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Are you sure you want to purchase this item?</p>
            </Modal>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
