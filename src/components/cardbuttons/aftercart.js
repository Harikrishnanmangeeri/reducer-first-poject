import React from 'react'
import "./cartbutton.css"
const Aftercart = () => {
  return (
    <div className="after-cart">
         <button className="cart-counter-button">
         {/* onClick={() => disptach(decrement())} */}
            -
         </button>
         <div className="cart-count"></div>
         {/* {cartCount} */}
         <button className="cart-counter-button" >
         {/* onClick={() => disptach(increment())} */}
            +
         </button>
      </div>
  )
}

export default Aftercart