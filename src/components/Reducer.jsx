// create a pure reducer function to update bookState
export const bookReducer= (state, action)=>{
    switch (action.type) {
      case "FILTER_BY_AUTHOR":
      return {...state, searchAuthor:action.payload}
        case "FILTER_BY_TITLE":
      return {...state, searchTitle:action.payload}
        case "FILTER_BY_COUNTRY":
      return {...state, searchCountry:action.payload}
        case "FILTER_BY_LANGUAGE":
      return {...state, searchLanguage:action.payload}
        case "FILTER_BY_YEAR":
      return {...state, searchYear:action.payload}
      default:
        return state
  }}