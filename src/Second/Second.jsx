import React from 'react'
import './Second.css'
import iphone16 from '../assets/iphone16edited.png'
import { Image } from 'antd';
import iphone16video from '../assets/iphone16.mp4'
import { Button, Modal } from 'antd';
const Second = () => {

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [newopen, setNewOpen] = React.useState(false);
  const [buyLoading, setBuyLoading] = React.useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const showBuyLoading = () => {
    setNewOpen(true);
    setBuyLoading(true);

    setTimeout(() => {
      setBuyLoading(false);
    }, 2000);
  };





  return (
    <>
      <div className="second-container">
        <h1>iPhone 16</h1>
        <h3>Built for Apple Intelligence.</h3>
      <div className="centered-image">
        <Image
    width={700}
    preview={{
      destroyOnClose: true,
      imageRender: () => (
        <video
          width="100%"
          controls
          src={iphone16video} autoPlay 
        />
      ),
      toolbarRender: () => null,
    }}
    src={iphone16} 
  />
  </div>

       

        <div className='buttons'>
      <Button type="primary" onClick={showLoading} className='more-btn'>
        Learn more
      </Button>
     
      <Modal
        title={<p style={{color:"red"}}>iPhone 16 Specifications</p>}
        footer={
          <Button type="primary" onClick={showLoading}>
            More
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p style={{color:"grey"}}><strong style={{color:"black"}}>Dimensions:</strong> 147.6 x 71.6 x 7.8 mm (5.81 x 2.82 x 0.31 in)</p>
        <p style={{color:"grey"}}><strong style={{color:"black"}}>OS:</strong> iOS 18, upgradable to iOS 18.1</p>
        <p style={{color:"grey"}}><strong style={{color:"black"}}>Main Camera:</strong> 48 MP, f/1.6, 26mm (wide), 1/1.56", 1.0µm, dual pixel PDAF, sensor-shift OIS</p>
        <p style={{color:"grey"}}><strong style={{color:"black"}}>Video:</strong> 4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS</p>
        <p style={{color:"grey"}}><strong style={{color:"black"}}>Colors:</strong> Black, White, Pink, Teal, Ultramarine</p>
        <p style={{color:"grey"}}><strong style={{color:"black"}}>Charging:</strong> 25W wireless (MagSafe), 15W wireless</p>
      </Modal>


      <Button type="primary" onClick={showBuyLoading} className='buy-btn'>
        Buy
      </Button>

      <Modal
        title={<p style={{color:"red"}}>Buy Options</p>}
        footer={
          <Button type="primary" onClick={showBuyLoading}>
            Options
          </Button>
        }
        loading={buyLoading}
        open={newopen}
        onCancel={() => setNewOpen(false)}
      >
        <p><strong style={{color:"black"}}>Ultramarine</strong></p>
        <p><strong style={{color:"rgb(121, 121, 130"}}>Pink</strong></p>
        <p><strong style={{color:"#D1B48C"}}>Teal</strong></p>
      </Modal>

      </div>


        <p>Apple intelligence available now in US English<sup>1</sup></p>
      </div>
    </>
  )
}

export default Second