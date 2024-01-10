import React from 'react'
import "./Header.css"
const Header = ({loggedIn}) => {
  return (
    <div className='header-wrapper'>
        <div className='header-inner-container'>
          {loggedIn ?(
            <h1 className='header-title'>Hello {loggedIn.username}</h1>
          ): (
            <h1 className='header-title'>Awesome Header</h1>
      )}
        </div>
    </div>
  )
}

export default Header