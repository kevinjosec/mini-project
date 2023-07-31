import React from 'react'
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useState} from 'react';
import Overlay from '../Overlay/Overlay';

const Navbar = () => {
  const [isoverlayopen , setisoverlayopen] = useState(false);

  const handleopenoverlay =() =>{
    setisoverlayopen(true);
  }
  const handlecloseoverlay =()=>{
    setisoverlayopen(false);
  }

  return (
  
    <div className="Navbarmain" > 
      <div className='box1'>
      <h1 className="Caeffine">Caeffine corner</h1> 
      </div>
      <div className="hamenu"> 
      <button className='menubutton' onClick={handleopenoverlay}>
        <GiHamburgerMenu size="2.5rem" color='white'/>
        <Overlay isopen={isoverlayopen} isclose={handlecloseoverlay}/>
      </button>
      </div>
      </div>
  );
};

export default Navbar;
