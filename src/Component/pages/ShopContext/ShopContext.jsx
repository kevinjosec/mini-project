import React, { createContext,useState } from 'react'
import {PRODUCTS} from '../PRODUCTS'
import { RecipeDesign } from '../Recipe/RecipeDesign';
export const ShopContext = createContext(null);
const getDefaultCart = () =>
{
    let cart={}
    for (let i=1; i<=PRODUCTS.length; i++)
    {cart[i]=0;}
    return cart;
};

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [showPopup, setShowPopup] = useState(false);
    const getTotalAmount=()=>
    {
        let totalAmount=0;
        for (const item in cartItems)
        {
            if (cartItems[item]>0)
            {
            let itemInfo = PRODUCTS.find((product)=>product.id===Number(item));
            totalAmount+=cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }


    const togglePopup = () => {
      setShowPopup(!showPopup); // Toggle the pop-up visibility
  
      // Automatically close the pop-up after 3 seconds (adjust as needed)
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    };
  


    const addToCart = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
        togglePopup();
    }
    const closePopup = () => {
      setShowPopup(false); // Close the pop-up immediately
    };

    const removeFromCart = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, getTotalAmount,closePopup,
      showPopup,};
  return (
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
  )
}
