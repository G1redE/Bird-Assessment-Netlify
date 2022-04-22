import React from 'react'

function NavList({list,buttonvalue}) {
  return (
    <div className={buttonvalue?'nav-list-div-mobile':'nav-list-div'}>
        <ul className={buttonvalue?'nav-list-mobile':'nav-list'}>
           { list.map((ele,index) => <li className='nav-list-item' key= {index}>{ele}</li>)}
        </ul>
    </div>
  )
}

export default NavList