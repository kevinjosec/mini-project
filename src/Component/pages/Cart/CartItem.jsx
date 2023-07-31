import React, {useContext}from 'react'
import './CartItem.css'
import { ShopContext } from '../ShopContext/ShopContext';
export const CartItem = (props) => {
    const {id,productName,img,price}=props.data;
    const {cartItems, addToCart, removeFromCart}=useContext(ShopContext);
  return (
    <div>
    <div className='cart-design'>
        <div className='imag'>
            <img src={img} className='image'/>
        </div>
        
        <div className='productName'>
            <p>
                {productName}
            </p>
        </div>
        <div className='price'>
            <p>
              ${price}
            </p>
        </div>
        <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input value={cartItems[id]} style={{width:"25px", textAlign: "center"}}/>
            <button onClick={()=>addToCart(id)}> + </button>
        </div>
        </div>
    </div>
  )
}
