import { useState } from "react";
import SearchComponent from "./SearchComponent";

function ProductSearch(){
let[product,setproduct]=useState(['Pen','Pencil','paper','Note'])
let[filterproduct,setfilter]=useState(product)
const handleSearch=(searchTerm)=>{
    if(searchTerm==='')
setfilter(product)
    else
    setfilter(product.filter((p)=>p.toLowerCase().includes(searchTerm.toLowerCase())))
}
return(<>
<b>This is Parent componnet</b><br></br>
<SearchComponent handleSearch={handleSearch}></SearchComponent>
{filterproduct && filterproduct.map((p)=><b>{p}<br></br></b>)}

</>)


}
export default ProductSearch