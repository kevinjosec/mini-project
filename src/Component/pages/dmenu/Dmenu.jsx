import React, {useState,useContext} from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import './Dmenu.css'
import { PRODUCTS } from '../PRODUCTS'
import {useNavigate} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai';

import "./Addbutton.css"
import Buybutton from '../../Buybutton/Buybutton'



export default function Dmenu(props) {

 const navigate=useNavigate();

 const Addbutton=({isopen, isclose})=>{
  const [showRecipe, setShowRecipe] = useState(false);
  const handleButtonOpener = () => {
    setShowRecipe(true);
  };

  const handleButtonCloser = () => {
    setShowRecipe(false);
  };

  const handleRecipeClick = () => {
    // Toggle the recipe display
    setShowRecipe(!showRecipe);
  };


    return (isopen !== false && isopen!=='') ? (
        <div className='buttonhandler' onClick={isclose}>
         <div>
    <div className="radialmenu">
        <li className="ordeR">
        <button className='order' onClick={handleAddToCart}>
          Add
        </button>
        {showPopup && (
              <div className='popup' style={{width:"90px"}}>
                <h5>Item added </h5>
              </div>
            )}
        </li>
        <li className="revieW">
        <Link to="/review" className='Review'> Review</Link>
        </li>
        <li className="recipE">
        <button className='Recipe' onClick={handleRecipeClick}>
        <Link to={`/recipe/${id}`} className='Recipe'>
        {showRecipe ? 'Hide Recipe' : 'Recipe'}</Link>
                      </button>
        </li>
    </div>
    </div>
        </div>
      ) : null
}

  const {id,productName,img,price,recipe}=props.data;
  const {addToCart,recipePage, showPopup } = useContext(ShopContext);
  const [isbuttonopen , setbuttonopener] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
  };
  const handlebuttonopener =()=>{
    setbuttonopener(true);
  }
  const handlebuttoncloser =()=>{
    setbuttonopener(false);
  }
 
    return (
      <div>
          <div className='mainbody'>
  <div>
  <img src={img} className='imagebox'>
  </img>
  <h4 className='label'>
    {productName} 
  </h4>
  <div >
  <h5 className='pricemenu'>
    Price: ${price}
  </h5>
  </div>
  <div className='add-button'>
  <button className='button' onClick={handlebuttonopener}>
  <AiOutlinePlusCircle size="2.5rem" color="black"/>
  <Addbutton isopen={isbuttonopen} isclose={handlebuttonopener}/>
  </button>
  </div>
  </div>
  </div>
  <br></br>
      </div>
    )
  }
