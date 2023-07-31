import React from 'react'
import './Connect.css'
import Navbar from '../../Navbar/Navbar'
import { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc} from "firebase/firestore";

export default function Connect()
{
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [msg, setMsg] = useState("");
    const [table, setTable] = useState("");
    const [contact, setContact] = useState("");
    const userCollec = collection(db, "messages");
  
    const messageUser = async () => {
      
      await addDoc(userCollec, {
        createdAt: new Date(),
        firstname: name,
        lastname: last,
        message: msg,
        tableno:table,
        contact:contact,
      });
    };
    return(
        <div className="main0">
            <Navbar/>
        <div className='main1'>
            <h1 className='heading1'>Lets Connect!</h1>
            <div className='contact'>
        
                <h3>First name</h3>
                <input type="text" placeholder='First name'  style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setName(event.target.value);
                    }}/>
                <h3>Last Name</h3>
                <input type="text"  placeholder='lastname' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setLast(event.target.value);
                    }}/> 
                <h3>Contact no.</h3>
                <input type="text" placeholder='contactno' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setContact(event.target.value);
                    }}/> 
                <h3>Table no.</h3>
                <input type="text"  placeholder='tableNo' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setTable(event.target.value);
                    }}/>
                <h3>Message</h3>
                <input type="textarea" placeholder='message' style={{ width: '300px', height: '40px' }} onChange={(event) => {
                      setMsg(event.target.value);
                    }}/>
                <button type="submit" className='send1' onClick={() => {
                      messageUser();
                    }}>
                         {" "}
                    Send Message{" "}
                  </button>
                
            
            </div>
            <div className='icon'>
                <br></br>
                <span>&#9993;
                    iamcaffinecorner@gmail.com
                </span>
                <br></br>
                <span>&#9743;
                    123456789
                </span>
                <br></br>
                <span>&#9990;987654321</span>
                <br></br>
            </div>
            <br></br>
        </div>
        </div>
    )
}