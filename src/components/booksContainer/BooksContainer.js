import React from "react";
import "./BooksContainer.css";
import BookCard from "../bookCard/BookCard";

const BookContainer = ({allBooks, loggedIn}) => {
    return (
        <div className="books-container-wrapper">
        <div className="books-container-inner">
    {allBooks.map((book, key) => (
        <div className="bookcard">
        <BookCard book={book} loggedIn={loggedIn} />
        </div>
        ))}
  </div>
  </div>
    );
}

export default BookContainer;