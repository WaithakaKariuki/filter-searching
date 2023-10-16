import React  from "react";
import {useReducer} from 'react'
import BookShow from "./BookShow"
import './styles.css'
import {bookReducer} from './Reducer'  


const BookSearch = ({books}) => {
 
  const [bookState, bookDispatch] = useReducer(bookReducer,{
    searchAuthor:"",
    searchTitle:"",
    searchCountry:"",
    searchLanguage:"",
    searchYear:"",
  })
  // this function returns an array of filtered books according to the userinputs
  const transformBooks = () =>{
    let sortedBooks = books
    if (bookState.searchAuthor){
      sortedBooks = sortedBooks.filter((book) => 
        book.author.toLowerCase().includes((bookState.searchAuthor.replace(/ /g, '') )) //remove whitespaces from user input
      )}
    if(bookState.searchTitle){
        sortedBooks = sortedBooks.filter((book) =>
        book.title.toLowerCase().includes((bookState.searchTitle.replace(/ /g, '') ))
      )}
     if (bookState.searchCountry){
      sortedBooks = sortedBooks.filter((book) =>
    book.country.toUpperCase().includes(bookState.searchCountry)    
                                 )}
    if (bookState.searchLanguage){
      sortedBooks = sortedBooks.filter((book) =>
    book.language.toLowerCase().includes((bookState.searchLanguage).toLowerCase())
      )}
    if (bookState.searchYear){
      sortedBooks = sortedBooks.filter((book) =>
    book.year.toString().includes(bookState.searchYear)    
                                 )}
    return sortedBooks
  }
  return (
      <div className="main" >
        <div className="main2">
         <span className="label">author: </span>
          <input
                  data-testid="author"
                  className="input"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_AUTHOR",
                  payload: e.target.value,
                  })
                  }}>
           </input><br/>
          <label className="label">title:  </label>
          <input 
                  data-testid="title"
                  className="input"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_TITLE",
                  payload: e.target.value,
                  })
                  }}></input><br/>
          <label className="label">country: </label>
          <input 
                  
                  data-testid="country"
                  className="input"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_COUNTRY",
                  payload: e.target.value,
                  })
                  }}></input><br/>
          <label className="label">language: </label>
          <input 
                 data-testid="language"
                  className="input"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_LANGUAGE",
                  payload: e.target.value,
                  })
                  }}></input><br/>
          <label className="label">year: </label>
          <input
                  data-testid="year"
                  className="input"
                  type="text"
                  required
                  onChange={(e)=>{
                  bookDispatch({
                  type: "FILTER_BY_YEAR",
                  payload: e.target.value,
                  })
                  }}></input>

</div>
        <div className="title"> 
          {(transformBooks()).map((book, idx)=>(
            <BookShow data-testid="book" key={idx} book={book}/>     
          ))} 
        </div>

      </div>
  );
};

export default BookSearch;
