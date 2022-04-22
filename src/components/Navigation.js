import React, { useState } from 'react'
import '../App.css'
import NavList from './NavList'
import {FaBars,FaTimes} from 'react-icons/fa'
function Navigation() {
    const navlist = ['Home','Projects','Service','Blog']
    const [isButton,setButton] = useState(false)
  return (
      <>
      <div className='nav-bar'>
          <div className='nav-heading'>
              <h1>Merka</h1>
          </div>
              <button className='hamburger-btn' onClick ={() => {setButton(!isButton)}}>{isButton?<FaTimes/>:<FaBars/>}</button>
              <NavList list={navlist} buttonvalue={isButton}/>
      </div>
     
    </>
  )
}

export default Navigation