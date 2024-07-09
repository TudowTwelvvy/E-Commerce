import React from 'react'
import "./Hero.css"
import hand_icon from '../../assets/Frontend_Assets/hand_icon.png'
import { FaArrowRightLong } from "react-icons/fa6";
import heroImg from "../../assets/Frontend_Assets/hero_image.png"

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <div className="hero-lastest-btn">
          <div>Latest Collection</div>
          <FaArrowRightLong className=''/>
        </div>
      </div>
      

      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero