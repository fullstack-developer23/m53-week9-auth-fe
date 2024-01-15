import React from 'react';
import "./FavContainer.css";
// import {favBook} from "../booksContainer/BooksContainer.js";

const FavContainer = ({loggedIn}) => {

  return (
    <div className='favContainer-wrapper'>
        <div className='favContainer-inner'>
            <div className='favContainer-detail'>
                <h1>Hello {loggedIn.username}</h1>
                <p>Your favourite is: </p>
                {/* <p>{favBook.title}</p> */}
            </div>
            <div className='favContainer-detail'></div>
        </div>
    </div>
  )
}

export default FavContainer