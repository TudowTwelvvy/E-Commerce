import React from 'react'
import './Popular.css'
import dataProduct from "../../assets/Frontend_Assets/data"
import Item from '../Items/Item'

console.log(dataProduct)

function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item, index)=>{
          return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular