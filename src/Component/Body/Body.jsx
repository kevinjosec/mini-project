import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Body.css'
import pics from './mainimage.jpg';
import pics1 from './eatimage.jpg';
import pics2 from './drinkimage.jpg';
import pics3 from './groupphoto.jpg';
export default function Body() {
  return (
    <div className="MainBody">
        <figure className="figcap">  
      <img  src={pics} className="coffe">
        
      </img>
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
     <div>
      <h1 className="Eat">
        Eat
      </h1>

      <h5 className="BLA">
       Breakfast, Lunch and Artisanal Pastries    
      </h5>

      <p className="BLAA">
      Our Egg White & Roasted Red Pepper<br></br> Egg Bites are tasty, protein rich and <br></br>170 calories.
      </p>
      <Link to="/menu" className='SeeMore'>See More</Link>
      </div>
      <img src={pics1} className="omelette"></img>
      
      <div>
        <h1 className="DrinK">
            Drink
        </h1>
        <h5 className="FTC">
            The Freshest Cup in Town
        </h5>
        <p className="FTCC">
        
        Try the new Cinnamon Caramel Cream <br></br>Nitro Cold Brew or go for the Vanilla <br></br> Sweet Cream Nitro Cold Brew
        </p>
        <Link to="/menu" className='SeeMore1'>See More</Link>
<img src={pics2} className="drink"></img>
      </div>
    
    <div className="midbar">
      <br></br>
      <h1 className="midtext1">Drop By for a Bite</h1>
      <br></br>
      <h2 className="midtext">Address</h2>
      <br></br>
      <h3 className="midtext">Caeffine Corner, Panampally Nagar, Ernakulam</h3>
      <br></br>
      <h1 className="midtext1">Opening Hours</h1>
      <br></br>
      <h3 className="midtext">Mon - Fri: 9am - 6pm</h3>
      <br></br>
    </div>
    <img src={pics3} className="grouphoto"></img>
    <div className="endtxt">
      <br></br>
      <h1 className="endtxt1">Talk to Us</h1>
      <br></br>
      <h3 className="endtxt2">123-456-789<br></br>
      infor@mysite.com
      <br></br>
      Caffine Corner, Panampally Nagar<br></br>
      Ernakulam</h3>
      </div>

    </div>

  )
}
