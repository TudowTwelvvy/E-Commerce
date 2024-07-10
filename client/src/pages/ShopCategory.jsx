import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../components/Items/Item';

function ShopCategory(props) {
  const {allProducts} = useContext(ShopContext);

  

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='shopcategory-banner' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <RiArrowDropDownLine className='dropdown-icon'/>
        </div>
      </div>

      <div className="shopcategory-products">
        {
          allProducts.map((item,index)=>{
            if(props.category === item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            }else{
              return null
            }
          })
        }
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory