import {React, useState} from 'react'

function BookShows({books}) {

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
      [key]:e.target.value
    })
  }


  const sortedBooks = books.filter(book=>{
    if(filterBy.author === "" && filterBy.country === "" && filterBy.title === "" && filterBy.language === "" && filterBy.year === ""){
      return true
    }
    if(book.author.toLowerCase().includes(filterBy.author)){
      return book
    }
    if(book.country.toLowerCase().includes(filterBy.country)){
      return book
    }
    if(book.language.toLowerCase().includes(filterBy.language)){
      return book
    }
    if(book.title.toLowerCase().includes(filterBy.title)){
      return book
    }
    if(book.year.toString().includes(filterBy.year)){
      return book
    }
  })
console.log(sortedBooks)

  const showBooks = sortedBooks.map(book => {
    return(
    <div key={book.id} data-testid="book" className="show">
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
  })

  // console.log(Object.values(filterBy))
  console.log(filterBy.author )
  return (
    <div className="main" >
        <div className="main2">
         <span className="label">author: </span>
          <input
                  name="author"
                  data-testid="author"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}>
           </input><br/>
          <label className="label">title:  </label>
          <input 
                  data-testid="title"
                  name="title"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}
                  ></input><br/>
          <label className="label">country: </label>
          <input 
                  
                  data-testid="country"
                  name="country"
                  className="input"
                  type="search"
                  onChange={(e)=>handleChange(e)}></input><br/>
          <label className="label">language: </label>
          <input 
                  data-testid="language"
                  name="language"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}></input><br/>
          <label className="label">year: </label>
          <input
                  data-testid="year"
                  name="year"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}></input>

        </div>
        <div className="title">
          {showBooks}
        </div>
    </div>
  )
}

export default BookShows
