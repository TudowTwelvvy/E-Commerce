import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/Frontend_Assets/logo.png"
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>TwelvvyShopper</p>
      </div>

      <ul className='nav-menu'>
        <li  onClick={()=>setMenu("shop")}><Link style={{textDecoration:"none"}} to='/'>Shop </Link>{menu === 'shop'? <hr/> :''}</li>
        <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link> {menu === 'mens'? <hr/> :''}</li>
        <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link> {menu === 'womens'? <hr/> :''}</li>
        <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:"none"}} to='/kids'>Kids </Link>{menu === 'kids'? <hr/> :''}</li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link style={{textDecoration:"none"}} to='/cart'>
          <div className='cart'>
            <BsCart className='icon-cart'/>
            <div className="nav-cart-count">0</div>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar