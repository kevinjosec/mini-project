import React, { useState,useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext'
import { createContext } from 'react';

export const RecipeDesign = (props) => {
  const { id, productName, img, price, recipe } = props.data;
  
  return (
    <div>
      {recipe}
    </div>
  );
};