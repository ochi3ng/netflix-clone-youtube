import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const[show,handleShow]=useState(false)
  // {`nav ${show && 'nav_black'}`}
  const TransitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false)
    }

  }

  useEffect(()=>{
    window.addEventListener("scroll",TransitionNavBar);
    return()=>window.addEventListener("scroll",TransitionNavBar)
    }, [])

  return (
    <div className= {`nav ${show && 'nav_black'}`}>
<div className='nav_contents'>
<img className='nav_logo'
 src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=''/>
   
   
    <img className='nav_avatar'
     src='https://png.pngitem.com/pimgs/s/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png'alt=''/>
</div>

    
    </div>
  )
}

export default Nav