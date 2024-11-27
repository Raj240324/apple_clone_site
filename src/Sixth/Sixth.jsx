import React from 'react'
import './Sixth.css'
import ipadmini from '../assets/ipadmini.png'
import iphonebox from '../assets/iphonebox.png'

const Sixth = () => {
  return (
    <>
    <div className="sixth-container">
        <div className="sixth-left-container">
          <h1>iPad mini</h1>
          <h3>Single-handedly awesome.</h3>
          <div className="buttons">
            <button className="more-btn">Learn more</button>
            <button className="buy-btn">Buy</button>
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
        
            <button className="estimate-btn">Get your estimate</button>
    
    
          <img className="iphonebox" src={iphonebox} alt="" />

        </div>
      </div>
      
    </>
  )
}

export default Sixth
