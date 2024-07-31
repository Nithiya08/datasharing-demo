import { useEffect, useState } from "react";

function Product(){
    let[product,setProduct]=useState('')
    async function getCato(){
        try{
            let response=await fetch("https://fakestoreapi.com/products")
            let data=await response.json()
            setProduct(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getCato()
    },[])
    const handle=(event)=>{
        setProduct(event.target.value)
    }
    return(<>
    <b>category</b><br></br>
    
    <select  value={product} onChange={handle}>
    {product && product.map((p)=>(
        <option>{p.category}</option>
    
    ))}
    </select>
    </>)

}
export default Product