import React from 'react'
import '../App.css'
import {BsBoxSeam} from 'react-icons/bs'
function MainMiddle() {
  return (
    <div className='main-mid'>
    <div className='main-mid-text'>
    <h1>MERKLABS BLOCKCHAIN DEVELOPMENT AND <BsBoxSeam style={{'transform':'translateY(5px)'}}/> SECURITY SOLUTIONS</h1>
    <p style={{'fontWeight':'bolder','marginTop':'20px'}}>We provide blockchain development services and also assure you comprehensive security in blockchain development </p>
    <button className='main-mid-btn'>Explore More </button>
    </div>
    </div>
  )
}

export default MainMiddle