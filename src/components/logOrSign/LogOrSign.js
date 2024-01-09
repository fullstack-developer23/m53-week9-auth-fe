import React from 'react';
import "./LogOrSign.css";
import Signup from '../signup/Signup';

const LogOrSign = () => {
  return (
    <div className='logorsign-wrapper'>
        <div className='logorsign-inner-container'> 
            <div className='logorsign-box'>
                <Signup />
            </div>
            <div className='logorsign-box'></div>
        </div>
    </div>
  )
}

export default LogOrSign