import {React, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import BookSearch from "./components/BookSearch";
// import BookSearchs from "./components/BookSearchs";
// import BookSearches from "./components/BookSearches";


/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/

let books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "language": "Italian",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "language": "English",
    "pages": 216,
    "title": "Mrs Dalloway",
    "year": 1925
  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "language": "English",
    "pages": 209,
    "title": "To the Lighthouse",
    "year": 1927
  },
];

const App = () => {


  const [books,setBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/booksData")
    .then(res=>res.json())
    .then(res=> setBooks(res))
  },[])
  return (
    <div id="app">
      <BookSearch books={books} />
      {/* <BookSearchs books={books} /> */}
      {/* <BookSearches books={books} /> */}
    </div>
  );
}

export default App;