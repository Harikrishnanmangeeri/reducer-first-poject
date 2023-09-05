import React, {  useState } from 'react'
import '../components/product.css'
import products from '../api/products.json'
import Aftercart from './cardbuttons/aftercart'
import Beforecart from './cardbuttons/beforecart'
import {useSelector} from 'react-redux'
const Product = () => {
  const cart =useSelector((state)=> state.cart)
   const[count,setcount]=useState(0)
console.log(cart ,'==cart');
   const addtocart = () =>{
      setcount(1)
   }
  
    
console.log(count);
  return (
<section className="container">
         {products?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>
               {/* <CartButtons product={product} /> */}
         {count > 0 ? <Aftercart/> :  <Beforecart addtocart={addtocart}/>}  
        
            </div>
         ))}
      </section>
  )
}

export default Product