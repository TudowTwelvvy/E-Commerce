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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory category='mens'/>}/>
          <Route path="/womens" element={<ShopCategory category='womens'/>}/>
          <Route path="/kids" element={<ShopCategory category='kids'/>}/>

          <Route path="/product" element={<Product/>}/>
            <Route path=":productId" element={<Product/>}>
          </Route>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
