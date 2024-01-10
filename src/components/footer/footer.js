import React from 'react';
import "./Footer.css";

const Footer = ({loggedIn}) => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-inner-container'>
            {loggedIn ?(
            <h1 className='footer-title'>Hello {loggedIn.username}</h1>
            ): (
                <h1 className='footer-title'>Awesome Footer</h1>
            
            )}
            </div>
        </div>
      )
}

export default Footer