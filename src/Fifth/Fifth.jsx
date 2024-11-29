import React, {useState} from "react";
import { Button, Modal } from 'antd'
import imac from '../assets/imac.jpg'
import "./Fifth.css";
import macmini from "../assets/macmini.png";
import allmacs from "../assets/allmacs.png";
const Fifth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);



   const showModal = () => { setIsModalVisible(true); }; 
   const handleOk = () => { setIsModalVisible(false); }; 
   const handleCancel = () => { setIsModalVisible(false); };

   const showMoreModal = () => { setIsMoreModalVisible(true); };
   const morehandleOk = () => { setIsMoreModalVisible(false); }; 
   const morehandleCancel = () => { setIsMoreModalVisible(false); };



  return (
    <>
      <div className="fifth-container">
        <div className="fifth-left-container">
          <h1>Mac mini</h1>
          <h3>Size down. Power up.</h3>
          <div className="buttons">
            <button className="more-btn"><a href="https://www.apple.com/in/mac-mini/" style={{color:"white", textDecoration:"none"}}>Learn more</a></button>
            <Button className="buy-btn" type="primary" onClick={showModal}> Buy </Button> 
            <Modal title="Purchase Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <p>Are you sure you want to purchase this item?</p> 
            </Modal>
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
    
            <Button type="primary" onClick={showMoreModal} className="more-btn"> Learn more </Button> 
            <Modal title="Product Details" visible={isMoreModalVisible} onOk={morehandleOk} onCancel={morehandleCancel} > 
              <img src={imac} alt="Product" style={{ width: '100%', marginBottom: '20px', height: "250px" }} />
              <p>The iMac is a series of all-in-one computers from Apple Inc. operating on the MacOS. Introduced by Steve Jobs in August 1998 when the company was financially troubled, the computer was an inexpensive, consumer-oriented computer that would easily connect to the Internet.</p>
               </Modal>




               <Button className="buy-btn" type="primary" onClick={showModal}> Buy </Button> 
            <Modal title="Purchase Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <p>Are you sure you want to purchase this item?</p> 
            </Modal>
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
