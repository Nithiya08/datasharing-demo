import { useState } from "react";

function SearchComponent({handleSearch}){
  let[searchTerm,setSearchTerm]=useState('')

  const handleChange=(event)=>{
setSearchTerm(event.target.value)
handleSearch(event.target.value)
  }

  return(<>
  <b>Child Component</b><br></br>
  <b>Search</b><input type="text" value={searchTerm} onChange={handleChange}></input><br></br>
  </>)
}
export default SearchComponent