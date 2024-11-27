import React from 'react'
import './Hero.css'
import iphonefirst from '../assets/iphonefirst.png'


const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <h1>iPhone 16 Pro</h1>
        <h3>Built for Apple Intelligence.</h3>
        <img src={iphonefirst} alt="" />

        <div className='buttons'>
            <button className='more-btn'>Learn more</button>
            <button className='buy-btn'>Buy</button>
        </div>
        <p>Apple intelligence available now in US English<sup>1</sup></p>
      </div>
      
    </>
  )
}

export default Hero
