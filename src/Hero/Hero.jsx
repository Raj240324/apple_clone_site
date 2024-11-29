import React,{useState} from 'react'
import './Hero.css'
import iphonefirst from '../assets/iphonefirst.png'
import { Image } from 'antd';
import provideo from '../assets/iphone16provideo.mp4'
import { Button, Modal } from 'antd';
import iphone16pro from '../assets/iphone16proimage.webp'


const Hero = () => {

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
    <div className="hero-container">
        <h1>iPhone 16 Pro</h1>
        <h3>Built for Apple Intelligence.</h3>

   <Image
    width={800}
    preview={{
      destroyOnClose: true,
      imageRender: () => (
        <video
          width="100%"
          controls
          src={provideo} autoPlay 
        />
      ),
      toolbarRender: () => null,
    }}
    src={iphonefirst}
  />
      
      
      
       <div className='buttons'>
      
     
       <Button type="primary" onClick={showMoreModal} className="more-btn"> Learn more </Button> 
            <Modal title="Product Details" visible={isMoreModalVisible} onOk={morehandleOk} onCancel={morehandleCancel} > 
              <img src={iphone16pro} alt="Product" style={{ width: '100%',maxWidth:"250px", height: "250px", marginLeft:"100px"}} />
              <p><strong>1.Powerful Performance: </strong>
              Equipped with M-series chips for blazing-fast speed, multitasking, and professional-grade tasks.</p>
              <p><strong>2. Stunning Display: </strong>
              Retina XDR display with ProMotion for vibrant colors, deep contrasts, and ultra-smooth visuals.</p>
              <p><strong>3. Enhanced Battery Life: </strong>
              Up to 22 hours of battery life, ensuring uninterrupted work and entertainment.</p>
              <p><strong>4. Versatile Connectivity: </strong>
              Features Thunderbolt 4, MagSafe 3, and an HDMI port for seamless device integration.</p>
               </Modal>
         
               <Button className="buy-btn" type="primary" onClick={showModal}> Buy </Button> 
            <Modal title="Purchase Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <p>Are you sure you want to purchase this item?</p> 
            </Modal>

     
      



      </div>

      <p>Apple intelligence available now in US English<sup>1</sup></p>

      </div>
      
    </>
  )
}

export default Hero
