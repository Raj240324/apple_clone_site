import React, {useState} from "react";
import { Button, Modal } from 'antd'
import './Sixth.css'
import ipadmini from '../assets/ipadmini.png'
import iphonebox from '../assets/iphonebox.png'
import ipad from '../assets/ipad.jpg'
const Sixth = () => {
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
    <div className="sixth-container">
        <div className="sixth-left-container">
          <h1>iPad mini</h1>
          <h3>Single-handedly awesome.</h3>
          <div className="buttons">

          <Button type="primary" onClick={showMoreModal} className="more-btn"> Learn more </Button> 
            <Modal title="Product Details" visible={isMoreModalVisible} onOk={morehandleOk} onCancel={morehandleCancel} > 
              <img src={ipad} alt="Product" style={{ width: '100%', marginBottom: '20px', height: "250px" }} />
              <p><strong>1. Portable Design: </strong>
              Compact, lightweight, and easy to carry for on-the-go convenience.</p>
              <p><strong>2. Brilliant Display: </strong>
              8.3-inch Liquid Retina screen with vivid colors and sharp clarity.</p>
              <p><strong>3. Powerful Performance: </strong>
              Fast A-series chip for smooth multitasking and gaming.</p>
              <p><strong>4. Advanced Connectivity: </strong>
              5G, Wi-Fi 6, and USB-C for fast internet and versatile accessory support.</p>
               </Modal>


            <Button className="buy-btn" type="primary" onClick={showModal}> Buy </Button> 
            <Modal title="Purchase Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <p>Are you sure you want to purchase this item?</p> 
            </Modal>
          </div>
          <img className="ipadmini" src={ipadmini} alt="" />

          <p>
            Available Intelligence available now in US English<sup>1</sup>
          </p>
        </div>
        <div className="sixth-right-container">
          <h1>Trade in</h1>
          <h3>
            Upgrade and Save. It's that easy.
          </h3>
        
            <button className="estimate-btn"><a href="https://www.apple.com/in/shop/trade-in" style={{color:"white",textDecoration:"none"}} target="_blank">Get your estimate</a></button>
    
    
          <img className="iphonebox" src={iphonebox} alt="" />

        </div>
      </div>
      
    </>
  )
}

export default Sixth
