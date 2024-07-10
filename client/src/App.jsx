import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import menBanner from "./assets/Frontend_Assets/banner_mens.png"
import womenBanner from "./assets/Frontend_Assets/banner_women.png"
import kidsBanner from "./assets/Frontend_Assets/banner_kids.png"
console.log("men", menBanner)


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens"  element={<ShopCategory banner={menBanner} category='men'/>}/>
          <Route path="/womens"  element={<ShopCategory banner={womenBanner} category='women'/>}/>
          <Route path="/kids"  element={<ShopCategory banner={kidsBanner} category='kid'/>}/>

          <Route path="/product" element={<Product/>}/>
            <Route path=":productId" element={<Product/>}>
          </Route>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
