import React,{useState, useEffect} from 'react'
import Navbar from '../../Navbar/Navbar'
import {CgProfile} from 'react-icons/cg';
import {BsStarFill} from 'react-icons/bs';
import './Review.css'
import {MdSend} from 'react-icons/md'
import { db } from '../../../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";


export default function Review() {

  const userCollec = collection(db,"review");
  const [review, setUsers] = useState([]);
  useEffect(()=>
  {
    const getUsers = async()=> {
      const data = await getDocs(userCollec);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }; 

    getUsers();
  }, [])


  const [newReview, setReview]=useState("");


  const reviews = async () => {
    await addDoc(userCollec,{
      createdAt: new Date(),
      review: newReview,
    });
  };

  return (
    <div>
        <Navbar/>
        <div className='reviewBody'>
          <div className='header1'>
          <h1 className='header'>
            Review
          </h1>
          </div>
        {review.map((user)=>{ return (
        <div>
            <CgProfile size="2rem" collor="black" className="Profile"></CgProfile>
            <input type='label' value={user.review}style={{ width: '300px', height: '40px' }}className='input-container'/>
        </div>
        );
      })
      }
        </div>
        <div className='enterComment'>
            <input type="text" style={{width:'380px',height:'30px'}} placeholder="Enter your comment" onChange={(event)=>setReview(event.target.value)} >
            </input>
            <MdSend size="1.5rem" color="#366641" className='send' onClick={()=>reviews()}/>
        </div>
        
    </div>
  )
}
