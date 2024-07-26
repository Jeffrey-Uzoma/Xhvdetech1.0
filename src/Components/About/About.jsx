import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT XHVDE TECH</h3>
        <h2>Rendering website and design services</h2>
        <p>Xhvde tech is a sole propietorship firm, founded with the idea of providing website and designing services, such as frontend development, Graphics designs, UI/UX designs, and backend development.</p>
        <p>We aslo provide educational services for the website development enthusiasts. To join our community, You can just send us an email, or click the links on the social media logos. You can email us a message if you want to build a personal professional site of your own. We are sure to render our help in delivering the best</p>
        <p>As an online firm, we try to give our customers the optimal satisfaction from our services. Xhvde tech is a growing community that is hoping to be the best website building service in the world. We hope that you stick with us and get the best.</p>
      </div>
    </div>
  )
}

export default About