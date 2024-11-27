import React from 'react'
import Navbar from './Navbar/Navbar'
import './App.css'
import Store from './Store'
import Hero from './Hero/Hero'
import Second from './Second/Second'
import Third from './Third/Third'
import Fourth from './Fourth/Fourth'
import Fifth from './Fifth/Fifth'
import Sixth from './Sixth/Sixth'
import Slider from './Slider/Slider'
import Content from './Content/Content'
import Footer from './Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Store />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Slider />
      <Content />
      <Footer />
    </div>
  )
}

export default App
