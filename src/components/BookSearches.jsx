import {React, useState} from 'react'


//In order to pass all the tests, the trim for all fields, 
// you need to find a method that removes all whitespaces from the input fields.

function BookSearches({books}) {

  const [filterBy, setFilterBy] = useState({
    author:"",
    title:"",
    country:"",
    language:"",
    year:""
  })

  function handleChange(e){
    const key = e.target.name
    setFilterBy({
      ...filterBy,
      key:e.target.value
    })
  }

 function transformBooks(){
  let sortedBooks = books
  if (filterBy.author){
      sortedBooks = sortedBooks.filter((book) => // filter all the books and return only those that include the search query
      book.author.toLowerCase().includes(filterBy.author)
    )}
  if(filterBy.title){
      sortedBooks = sortedBooks.filter((book) =>
      book.title.toLowerCase().includes(filterBy.title) 
    )}
   if (filterBy.country){
      sortedBooks = sortedBooks.filter((book) =>
      book.country.toLowerCase().includes(filterBy.country)    
                               )}
  if (filterBy.language){
      sortedBooks = sortedBooks.filter((book) =>
      book.language.toLowerCase().includes(filterBy.language)    
                               )}
  if (filterBy.year){
      sortedBooks = sortedBooks.filter((book) =>
      book.year.toString().includes(filterBy.year)    
                               )}
  return sortedBooks
 }



  // const showBooks = 

  return (
    <>
    <div className="main" >
        <div className="main2">
         <span className="label">author: </span>
          <input
                  name="author"
                  required
                  data-testid="author"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}>
           </input><br/>
          <label className="label">title:  </label>
          <input 
                  data-testid="title"
                  required
                  name="title"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}
                  ></input><br/>
          <label className="label">country: </label>
          <input 
                  
                  data-testid="country"
                  required
                  name="country"
                  className="input"
                  type="search"
                  onChange={(e)=>handleChange(e)}></input><br/>
          <label className="label">language: </label>
          <input 
                  data-testid="language"
                  required
                  name="language"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}></input><br/>
          <label className="label">year: </label>
          <input
                  data-testid="year"
                  required
                  name="year"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}></input>

        </div>
        <div className="title">
          {transformBooks().map((book,idx) => (
    <div key={idx} data-testid="book" className="show">
      <div className='main1'>
      <span className="span">author:</span>
        <label className="label">{book.author}</label><br />      
      <span className="span">country:</span>
        <label className="label">{book.country}</label><br/>
      <span className="span">language:</span>
        <label className="label">{book.language}</label><br/>
      <span className="span">pages:</span>
        <label className="label">{book.pages}</label><br/>
      <span className="span">title:</span>
        <label className="label">{book.title}</label><br/>
      <span className="span">year:  </span>
        <label className="label">{book.year}</label>
        </div>
    </div>)
  )}
        </div>
    </div>
    </>
  )
}

export default BookSearches
