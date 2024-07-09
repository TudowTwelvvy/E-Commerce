import React from 'react';
import "./NewCollections.css"
import newCollections from "../../assets/Frontend_Assets/new_collections"
import Item from '../Items/Item';

function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {
          newCollections.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
          })
        }
      </div>
    </div>
  )
}

export default NewCollections