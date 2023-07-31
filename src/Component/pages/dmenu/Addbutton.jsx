import React from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import "./Addbutton.css"
import {useState} from 'react';
import Buybutton from '../../Buybutton/Buybutton'
export const Addbutton=({isopen, isclose})=>{
    return (isopen !== false && isopen!=='') ? (
        <div className='buttonhandler' onClick={isclose}>
        <Buybutton />
        </div>
      ) : null
        
}
export default Addbutton;