import { useEffect, useRef } from "react"
function UseRefDemo2(){
    let fnameRef=useRef()
 useEffect(()=>{
    fnameRef.current.focus()
 },[])

 return(<>
 <form>
    <label htmlFor="fname" >First Name</label>
    <input type="text" ref={fnameRef} placeholder="Enter Your First Name" id="fname"></input><br></br>
    <label htmlFor="lname" >Last Name</label>
    <input type="text"  placeholder="Enter Your last Name" id="lname"></input><br></br>
    <label htmlFor="fname" >Age</label>
    <input type="text"  placeholder="Enter Age" id="age"></input>
 </form>
 </>)

}
export default UseRefDemo2