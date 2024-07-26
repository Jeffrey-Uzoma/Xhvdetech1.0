import React,{useEffect} from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  useEffect(() => {
    document.title = "xhvde Tech";

    return ()=> {
      document.title = "Xhvde Tech"
    }
  })
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1> We Provide cutting-edge web services and education</h1>
        <p>Our services are designed to access the digital world through web applications and education of individuals in the tech space</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero