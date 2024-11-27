import React from 'react'
import './Second.css'
import iphone16 from '../assets/iphone16edited.png'
const Second = () => {
  return (
    <>
      <div className="second-container">
        <h1>iPhone 16</h1>
        <h3>Built for Apple Intelligence.</h3>
        <img src={iphone16} alt="" />

        <div className='buttons'>
            <button className='more-btn'>Learn more</button>
            <button className='buy-btn'>Buy</button>
        </div>
        <p>Apple intelligence available now in US English<sup>1</sup></p>
      </div>
    </>
  )
}

export default Second
