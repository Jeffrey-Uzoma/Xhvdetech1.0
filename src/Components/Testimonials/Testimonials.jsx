import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.JPG'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () =>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt=''/>
                <div>
                  <h3>Ifeoma Nduka</h3>
                  <span>Mercy mermorial Health, Nigeria</span>
                </div>
              </div>
              <p>OMG!! xhvde tech literally saved the business of my younger brother with the nice website they built for him. At least he can receive orders online now and deliver </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt=''/>
                <div>
                  <h3>Emmanuel Adiele</h3>
                  <span>Uniport, Nigeria</span>
                </div>
              </div>
              <p>Nice service. Used your graphics designing service for my birthday flier and it was worth it. If you are seeing this, don't worry. They are trusted and will surely deliver. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt=''/>
                <div>
                  <h3>Emmanuel Uzoma</h3>
                  <span>UNN , Nigeria</span>
                </div>
              </div>
              <p>Always the best, keep it up. At least its les stressful now looking for web developers </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt=''/>
                <div>
                  <h3>Nwidaa Saviour</h3>
                  <span>Uniport, Nigeria</span>
                </div>
              </div>
              <p>Very responsive and good service. Thanks alot for everything. You just saved me from a big loss. </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials