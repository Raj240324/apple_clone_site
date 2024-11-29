import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Third.css";
import applemac from "../assets/applemac.png";
import { Image } from "antd";
import macbookpro from "../assets/macbookpro.jpg";

const Third = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showMoreModal = () => {
    setIsMoreModalVisible(true);
  };
  const morehandleOk = () => {
    setIsMoreModalVisible(false);
  };
  const morehandleCancel = () => {
    setIsMoreModalVisible(false);
  };

  return (
    <>
      <div className="third-container">
        <h1>Macbook Pro</h1>
        <h3>A work of smart.</h3>

        <div className="buttons">
          <Button type="primary" onClick={showMoreModal} className="more-btn">
            {" "}
            Learn more{" "}
          </Button>
          <Modal
            title="Product Details"
            visible={isMoreModalVisible}
            onOk={morehandleOk}
            onCancel={morehandleCancel}
          >
            <img
              src={macbookpro}
              alt="Product"
              style={{ width: "100%", marginBottom: "20px", height: "250px" }}
            />
            <p>
              <strong>1.Powerful Performance: </strong>
              Equipped with M-series chips for blazing-fast speed, multitasking,
              and professional-grade tasks.
            </p>
            <p>
              <strong>2. Stunning Display: </strong>
              Retina XDR display with ProMotion for vibrant colors, deep
              contrasts, and ultra-smooth visuals.
            </p>
            <p>
              <strong>3. Enhanced Battery Life: </strong>
              Up to 22 hours of battery life, ensuring uninterrupted work and
              entertainment.
            </p>
            <p>
              <strong>4. Versatile Connectivity: </strong>
              Features Thunderbolt 4, MagSafe 3, and an HDMI port for seamless
              device integration.
            </p>
          </Modal>

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

        <div className="third-image">
          <Image.PreviewGroup
            items={[
              "https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-01.jpg?fit=1500%2C1000&p=1",
              "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg",
              "https://images.macrumors.com/t/4ssIz-tzmptgrsGY61DNGGY7PFw=/1600x0/article-new/2024/10/M4-MacBook-Pro-Thumb-2.jpg",
            ]}
          >
            <Image width={700} src={applemac} />
          </Image.PreviewGroup>
        </div>

        <div className="last-content">
          <h2>Built for Apple Intelligence</h2>
          <p>
            Available now in US English<sup>1</sup>
          </p>
        </div>
      </div>
    </>
  );
};

export default Third;
