import React from 'react';
import "./BookCard.css";
import { addFavBook } from '../../utils/fetch';

const BookCard = ({book, loggedIn, setFavBook}) => {

     const submitHandler = async (e, book, loggedIn) => {
        e.preventDefault();
        console.log("book title:", book.id);
        console.log("username:", loggedIn.username);
        const data = await addFavBook(book.id, loggedIn.username);
        console.log(data);
    }

  return (
    <div className="books-container-wrapper">
    <div className="books-container-inner">
    <div className="bookcard">
    <p>{book.title}</p>
    <p>{book.author}</p>
    <p>{book.genre}</p>
    <button onClick={(e) => submitHandler(e, book, loggedIn, setFavBook)}>Add to favourites</button>
    </div>
    </div>
    </div>

  )
  
}

export default BookCard;