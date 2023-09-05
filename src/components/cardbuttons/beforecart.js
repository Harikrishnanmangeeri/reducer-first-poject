import React from 'react'
import "./cartbutton.css"
const Beforecart = ({ addtocart }) => {
  return (
    <div className="before-cart">
    <button className="add-cart-button"  onClick={addtocart}> 
   
       Add to cart
    </button>
 </div>
  )
}

export default Beforecart