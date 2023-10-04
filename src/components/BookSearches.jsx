import {React, useState} from 'react'

function BookShows({books}) {






  return (
    <div className="main" >
        <div className="main2">
         <span className="label">author: </span>
          <input
                  data-testid="author"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}>
           </input><br/>
          <label className="label">title:  </label>
          <input 
                  data-testid="title"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}
                  ></input><br/>
          <label className="label">country: </label>
          <input 
                  
                  data-testid="country"
                  className="input"
                  type="search"
                  onChange={(e)=>handleChange(e)}></input><br/>
          <label className="label">language: </label>
          <input 
                  data-testid="language"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}></input><br/>
          <label className="label">year: </label>
          <input
                  data-testid="year"
                  className="input"
                  type="text"
                  onChange={(e)=>handleChange(e)}></input>

</div>
</div>
  )
}

export default BookShows
