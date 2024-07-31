import { useState } from "react";
import SearchComponent from "./SearchComponent";
function StudentDetails(){
    let[names,setNames]=useState(['Adam','Smith','John','Jack'])
    let[filterName,setFilterName]=useState(names)
    const handleSearch=(searchTerm)=>{
if(searchTerm==='')
    setFilterName(names)
    
    else
    setFilterName(names.filter((name)=>name.toLowerCase().includes(searchTerm.toLowerCase())))
}
return(<>
<SearchComponent handleSearch={handleSearch}></SearchComponent>
<b>Parent Componnet</b><br></br>
{filterName && filterName.map((name)=><b>{name}<br></br></b>)}
</>)
}
export default StudentDetails