import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
          <li><img src={mail_icon} alt="" />uzomajeffrey011@gmail.com</li>
          <li><img src={phone_icon} alt="" />+2347011607555</li>
          <li><img src={location_icon} alt="" />12 rumuchakara, uniport road, port-harcourt, Nigeria</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action='https://formspree.io/f/xayrgqey' method='POST'>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your full name' required/>
          <label>Your email</label>
          <input type="email" name='email' placeholder='Enter your email' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required/>
          <label>Write your message</label>
          <textarea name="message" rows="10" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact