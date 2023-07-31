import React from "react";
import './Hamenu.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai';
import {BiFoodMenu} from 'react-icons/bi';
import {BsTelephoneFill} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Hamenu() {
  return (
  <div className="Hamenu">
            
            <AiFillHome className="homeicon" size="1.3rem" />
        
        <div className="home">
            <Link to="/home" className="home">Home</Link>
        </div>
        
            <BiFoodMenu className="foodicon" size="1.3rem" />
        
        <div className="menu">
        <Link to="/menu" className="menu">Menu</Link>
        </div>
        
            <BsTelephoneFill className="contacticon" size="1.3rem" />
                <div className="contacT">
                <Link to="/contact" className="contacT">Contact</Link>
        </div>
        
            <AiOutlineShoppingCart className="carticon" size= "1.3rem"/>
                <div className="carT">
                    <Link to="/cart" className="carT">Cart</Link>
                </div>

        </div>

  )
}
