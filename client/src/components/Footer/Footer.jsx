import React from 'react'
import "./Footer.css"
import footerLogo from "../../assets/Frontend_Assets/logo_big.png"
import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>TwelvvyShopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <BsInstagram />
          <BsFacebook />
          <BsTwitterX />
          <BsWhatsapp />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Developed by Tumelo Khanye Copyright @2024- all right reserved</p>
      </div>
    </div>
  )
}

export default Footer