import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../PRODUCTS';
import Navbar from '../../Navbar/Navbar';
import './Recipe.css'
const Recipe = () => {
  const { id } = useParams();


  const getRecipeById = (dishId) => {
   
    const dish = PRODUCTS.find((item) => item.id === parseInt(dishId, 10));
    console.log(dishId)
    return dish ? dish : 'Recipe not found.';
  };

  const recipe = getRecipeById(id);

  return (
    <div>
     <Navbar/>
     <div className='recipeBody'>
      <h2>Recipe for {recipe.productName}</h2>
      <div className='recipeBody2'>
      <ul>
            {recipe.recipe.map((step, index) => (
              <li key={index}>{step} <br></br></li>
            ))}
          </ul>
      </div>
      </div>
    </div>
  );
};

export default Recipe;
