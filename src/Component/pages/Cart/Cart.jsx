import React, { useContext } from 'react'
import './Cart.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShopContext } from '../ShopContext/ShopContext';
import { PRODUCTS } from '../PRODUCTS';
import { CartItem } from './CartItem';
import Online from '../Onlnordr/Onlnordr'
import Navbar from '../../Navbar/Navbar';
import {useNavigate} from 'react-router-dom'
import { db } from '../../../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from 'react';


export const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const TotalAmount=getTotalAmount();
  const navigate=useNavigate();
  return (
    <div>
      <Navbar/>
      <div className='cart'>
        <h1>
          Your Cart
        </h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {TotalAmount > 0 ?
      <div >
        <div className='subtotal'>
            <h4>
                Subtotal: $ {TotalAmount}
            </h4>
            </div>
            <div className='checkout' >
            <button className='checkoutButton' onClick={()=>navigate("/online")}>
            Checkout
                </button>
                </div>           
        </div> : <h3 className='empty'>Your cart is empty</h3>}
    </div>
  )
}
