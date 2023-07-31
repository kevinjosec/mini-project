import React from 'react'
import './Menu.css'

import Navbar from '../../Navbar/Navbar'
import Dmenu from '../dmenu/Dmenu';
import Addbutton from '../dmenu/Addbutton';
import {PRODUCTS} from '../PRODUCTS'
export default function Menu() {
  return (
    <div>
      <Navbar/>
      <div className='header1'>
        <h4 className='our-menu'>
          Our Menu
        </h4>
        <h7 className='sub-our-menu'>
          You cant buy happiness but you can buy food and its the same thing
        </h7>
        </div>
        <br></br>
        <div className='full-menu'>
        <div className='category'>
         <br/>
        </div>
        <br></br>
        <div className='products'>
          {PRODUCTS.map((product)=>(<Dmenu data={product}/>))}
        </div>
      </div>
      </div>
  )
}
