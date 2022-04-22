import React from 'react'
import {BsBoxSeam} from 'react-icons/bs'
import '../App.css'

function MainLeft() {
  return (
    <div className='main-left'>
    <div className='details'>
        <h4>PJK-124</h4>
        <p>San Francisco</p>
        <BsBoxSeam className='details-icon'/>
    </div>
    <div className='indicator'>
        <button className='active'></button>
        <button></button>
        <button></button>
        <button></button>
    </div>
    </div>
  )
}

export default MainLeft