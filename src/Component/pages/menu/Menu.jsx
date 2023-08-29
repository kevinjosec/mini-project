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
      <div style={{ margin: '10px', padding: '20px' }}>
      </div>
        <h7 className='sub-our-menu'>
        "Food is symbolic of love when words are inadequate." - Alan D. Wolfelt
        </h7>
        <div style={{ margin: '10px', padding: '20px' }}>
      </div>
        </div>
        <br></br>
        <div className='full-menu'>
        <br></br>
        <div className='products-container'>
        <div className='products'>
          {PRODUCTS.map((product)=>(<Dmenu data={product}/>))}
        </div>
        </div>
      </div>
      </div>
  )
}
