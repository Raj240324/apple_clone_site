import React from 'react'
import './Third.css'
import applemac from '../assets/applemac.png'

const Third = () => {
  return (
    <>
      <div className="third-container">
      <h1>Macbook Pro</h1>
      <h3>A work of smart.</h3>

      <div className='buttons'>
            <button className='more-btn'>Learn more</button>
            <button className='buy-btn'>Buy</button>
        </div>

        <img src={applemac} alt="" />

        <div className='last-content'>
          <h2>Built for Apple Intelligence</h2>
          <p>Available now in US English<sup>1</sup></p>
        </div>
      </div>
    </>
  )
}

export default Third
