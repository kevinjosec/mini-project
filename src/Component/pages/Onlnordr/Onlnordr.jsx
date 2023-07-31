import React, {useContext} from 'react'
import './Onlnordr.css'
import '../../Navbar/Navbar'
import Navbar from '../../Navbar/Navbar'
import { ShopContext } from '../ShopContext/ShopContext';
import { useState } from "react";
import { db } from '../../../firebase';
import { collection, addDoc, arrayUnion } from "firebase/firestore";
import {PRODUCTS} from "../PRODUCTS"



export default function Onln() {
    const {cartItems}=useContext(ShopContext);
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [table, setTable] = useState("");
    const [contact, setContact] = useState("");
    const [radioValue, setRadioValue] = useState("Reservation");
    const userCollec = collection(db, "Customer");
    const orderCollec = collection(db, "order");

    const onlineOrder = async () => {
        
        await addDoc(userCollec, {
          createdAt: new Date(),
          firstname: name,
          lastname: last,
          tableno:table,
          contact:contact,
          delivery: radioValue,
        });
      };
      
      const {getTotalAmount} = useContext(ShopContext);
  const TotalAmount=getTotalAmount();

  const handleClick=async()=>{
    let arr=[]
    for(let i=1;i<=Object.keys(cartItems).length;i++){
        if(cartItems[i]==1){
            PRODUCTS.find(p=>{
                if(p.id==i)
                 arr.push(p.productName)
            })
        }

    }
    await addDoc(orderCollec, {
        food: arrayUnion(...arr), // Use the spread operator to add each element separately
      });
    };




    return (

        <div className='main'>
            <Navbar />
            <div className='main1'>
            <div className='header'>
            <h1>Online Order</h1>
            <br></br>
            <h1>Checkout</h1>
            </div>

            <div className='header2'>
                <h3>Delivery Method</h3>
            </div>
            <div className='radio'>
                <input type="radio" checked={radioValue==="Reservation"}  value="Reservation"  onChange={(event)=>setRadioValue(event.target.value)} />
                <label>
                    Online reservation
                </label>
                <br></br>
                <input type="radio" checked={radioValue==="Pickup"}  value="Pickup"  onChange={(event)=>setRadioValue(event.target.value)} />
                <label>
                    Pickup from restaurent
                </label>
           <br></br> 
           <br></br>
          
                       </div>

            <div className='contact'>
                <h1>Contact Information</h1>
                <div>
                    <h3>First name</h3>
                    <input type="text" id='fname' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setName(event.target.value);
                    }}/>
                    <h3>Last Name</h3>
                    <input type="text" id='lname' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setLast(event.target.value);
                    }}/>
                    <h3>Contact no.</h3>
                    <input type="text" id='nmbr' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setContact(event.target.value);
                    }}/>
                    <h3>Table no.</h3>
                    <input type="text" id='tblnmbr' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setTable(event.target.value);
                    }}/>
                   <br></br>
                   <button className='continue'onClick={() => {
                      onlineOrder();
                    }}>
                         {" "}
                    Continue{" "}
                
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
            </div>

         <br></br>
            <div>
                <h2 className='ttl'> Total: ${TotalAmount}</h2>
                <br></br>
                </div>

            <div className='final'>
        <br></br>
       
                <button className='cash' onClick={()=>handleClick()}>
                    <h3>Pay With Cash</h3>
                </button>
                <button className='upi'onClick={()=>handleClick()}>
                    <h3>Pay With UPI</h3>
                </button>
            </div>
            </div>

            

            


        </div>

    )
}