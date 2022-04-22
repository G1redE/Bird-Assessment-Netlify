import React from 'react'
import '../App.css'
import {RiFacebookCircleLine,RiInstagramLine,RiTwitterLine} from 'react-icons/ri'

function MainRight() {
  return (
    <div className='main-right'>
    <div className='social-media'>
        <RiFacebookCircleLine className='social-media-icon'/>
        <RiInstagramLine className='social-media-icon'/>
        <RiTwitterLine className='social-media-icon'/>
    </div>
    <div className='vertical-line'></div>
    </div>
  )
}

export default MainRight