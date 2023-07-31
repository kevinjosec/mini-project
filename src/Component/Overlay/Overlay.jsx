import React from 'react'
import Hamenu from '../Hamenu/Hamenu'
import './Overlay.css';
const Overlay =({isopen, onclose}) =>{
  return (isopen !== false && isopen!=='') ? (
    <div className='overlay' onClick={onclose}>
    <Hamenu />
    </div>
  ) : null
}
export default Overlay;