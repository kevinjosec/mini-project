import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Body.css'
import drinkImage from './drinkImage.jpg';
import pics3 from './groupphoto.jpg';
import download from './download.jpg'
import eatImage from './eatImage.jpg'
import footer1 from './1.jpg'
import footer2 from './2.jpg'
import footer3 from'./3.jpg'
import footer4 from './4.jpg'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
export default function Body() {
  return (
    <div className="MainBody">
        <figure className="figcap">  
      <div className="coffe1">
      <img  src={download} className="coffe">
      </img>
      </div>
      <figcaption className="figcaption"><br></br>
        Caeffine Corner, Panamapally <br></br>Nagar,<br></br> Ernakulam
      </figcaption>
      <figcaption className="figcaption2">
        <h2>
          Your Go To Spot for<br></br> Delicious <br></br>Eats & <br></br>Coffee
          </h2>
      </figcaption>
    <figcaption className="Food">
      <Link to="/menu" className='fooD'> Food</Link>
    </figcaption>
     <figcaption className="Drink">
        <Link to="/menu" className='drinK'> Drink </Link>
     </figcaption>
      </figure> 
    <div className="grid-container">
      <div className='gridItem'>
        <h1 className="Eat">
        Eat.
        </h1>
        <h6 className='BLA'>
        Breakfast, Lunch and Artisanal Pastries
        </h6>
        <p className="BLAA">
      Our Egg White & Roasted Red Pepper<br></br> Egg Bites are tasty, protein rich and <br></br>170 calories.
      </p>
      <Link to="/menu" className='SeeMore'>See More</Link>
      </div>
      <div className='gridItem'>
        <img className='omelette' src={eatImage}>
        </img>
      </div>
      <div className='gridItem'>
      <img className='drink' src={drinkImage}>
        </img>
        </div>
        <div className='gridItem'>
        <h1 className="DrinK">
        Drink.
        </h1>
        <h6 className='FTC'>
        The Freshest Cup in Town
                </h6>
                <p className="FTCC">
        
        Try the new Cinnamon Caramel Cream <br></br>Nitro Cold Brew or go for the Vanilla <br></br> Sweet Cream Nitro Cold Brew
        </p>
        <Link to="/menu" className='SeeMore1'>See More</Link>
          </div>
    </div>
    <br>
    </br>
    <br>
    </br>
    <br/>
    <br/>
    <br/>
    <div className='midbar'>
      <h1 className='midtext'>
        Drop by for a bite
      </h1>
      <div className='midContainer'>
        <div className='midItem'>
          <h7 className='address'>
            Address
          </h7>
          <br>
          </br>
          <div className='midItem2'>
          <h7>
            Panampally Nagar, Ernakulam
          </h7>
          </div>
        </div>
        <div className='midItem'>
          <h7 className='openingHours'>
            Opening Hours
          </h7>
          <br></br>
          <div className='midItem2'>
          <h7>
            Sunday - Friday : 8 to 5
          </h7>
          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
      <div className='footerContainer'>
        <div className='footerContainers'>
          <img className='footerImg' src={footer1}>

          </img>
        </div>
        <div className='footerContainers'>
        <img className='footerImg' src={footer2}>
            
            </img>
        </div>
        <div className='footerContainers'>
        <img className='footerImg' src={footer3}>
            
            </img>
        </div>
        <div className='footerContainers'>
        <img className='footerImg' src={footer4}>
          
            </img>
          </div>
      </div>

      <div className='finalContainer'>
        <div className='finalContainers'>
          <p className='contact-us'>
          Talk to Us
          </p>
          <h7 className='contact-info'>
            7994495225
            </h7>
            <br></br>
            <h7 className='contact-info'>
              Panampally Nagar, Ernakulam
              </h7>
        </div>
        <div className='finalContainers'>
        <div className='finalContainers'>
          <p className='contact-us'>
            Find Us
            </p>
            <div className='social-media'>
              <BsFacebook size='2rem' className='icons'></BsFacebook>
              <AiFillInstagram size='2rem' className='icons'></AiFillInstagram>
              <AiFillTwitterCircle size='2rem' className='icons'></AiFillTwitterCircle>
              </div>
        </div>
          </div>

      </div>
    </div>

    </div>

  )
}
