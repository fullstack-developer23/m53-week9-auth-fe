import './App.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LogOrSign from './components/logOrSign/LogOrSign';
import { useEffect, useState } from 'react';
import { getAllBooks } from './utils/fetch';
import BooksContainer from './components/booksContainer/BooksContainer';
import FavContainer from './components/favContainer/FavContainer';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [favBook, setFavBook] = useState(false);
  useEffect( () => {
    (async () => {
    const data = await getAllBooks();
    setAllBooks(data.books);
    console.log(data.books);
    })();
  }, [])

  // useEffect( () => {
  //   (async () => {
  //   const data = setFavBook();
  //   addFavBook(data.book);
  //   console.log(data.book);
  //   })();
  // }, [])
  return(
  <div> 
  <Header loggedIn = {loggedIn} />
  <LogOrSign setLoggedIn={setLoggedIn} />
  <BooksContainer allBooks={allBooks} loggedIn={loggedIn} favBook={setFavBook} />
  <FavContainer loggedIn={loggedIn}/>
  <Footer loggedIn = {loggedIn} />
  </div>
  )
  
}

export default App;
