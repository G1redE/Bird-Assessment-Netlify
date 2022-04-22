import React from 'react'
import '../App.css'

import MainMiddle from './MainMiddle'
import MainRight from './MainRight'
import MainLeft from './MainLeft'
function Main() {
  return (
    <div className='main'>
          <MainLeft/>
          <MainMiddle/>
          <MainRight/>
      </div>
    
  )
}

export default Main