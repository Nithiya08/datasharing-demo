import { useState } from "react";
import Table from 'react-bootstrap/Table';

function ProductUseRef(){
    let initialValue={'title':'','description':'', 'category':'','price':0}
    let[product,setproduct]=useState(initialValue)
    let[products,setproducts]=useState([])

    const handlechange=(event)=>{
   const{ name ,value}=event.target
   setproduct({...product,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        products.push(product)
        setproducts([...products])
        setproduct(initialValue)
    }

    return(<>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title" >Title</label>
        <input type="text" name="title" value={product.title} onChange={(e)=>handlechange(e)}></input><br></br>
        <label htmlFor="description" >description</label>
        <input type="text" name="description" value={product.description} onChange={(e)=>handlechange(e)}></input><br></br>
        <label htmlFor="category" >category</label>
        <input type="text" name="category" value={product.category} onChange={(e)=>handlechange(e)}></input><br></br>
        <label htmlFor="price" >price</label>
        <input type="text" name="price" value={product.price} onChange={(e)=>handlechange(e)}></input>
        <br></br>
        <input type="submit" value="submit"></input>
    </form>
    {JSON.stringify(products)}
    <br></br>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map((p)=>(
        <tr>
          <td>{p.title}</td>
          <td>{p.description}</td>
          <td>{p.category}</td>
          <td>{p.price}</td>
        </tr>
        ))}
        </tbody>
    </Table>


    </>)
}
export default ProductUseRef

//here,using map is used to convert the object in differnt represendation 