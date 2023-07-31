import React, { useContext } from 'react'
import './Buybutton.css'
import Review from '../pages/Review/Review'
import Recipe from '../pages/Recipe/Recipe'
import {ShopContext} from '../pages/ShopContext/ShopContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PRODUCTS } from '../pages/PRODUCTS';
 export default function Buybutton (props) {
  
const {addToCart} =useContext(ShopContext);
  return (
    <div>
    <div className="radialmenu">
        <li className="ordeR">
        <button className='order' onClick={()=> addToCart()}>
          Order
        </button>
        </li>
        <li className="revieW">
        <Link to="/review" className='Review'> Review</Link>
        </li>
        <li className="recipE">
            <Link to="/recipe" className='Recipe'>Recipe</Link>
        </li>

    </div>
    </div>
  )
}