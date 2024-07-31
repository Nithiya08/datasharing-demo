import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function UseRefDemo4() {
    let fnameRef = useRef()
    let initialValue = { 'firstname': '', 'lastname': '', 'age': 0 };
    let [user, setuser] = useState(initialValue)

    useEffect(() => {
        fnameRef.current.focus()
    }, [])

    const handleChange = (event) => {
        console.log(event.target)//event .target will give the entired element here it is give  input filed 
        const { name, value } = event.target
        //here we will use the multiple input filed with the single onchange function (the every input field will get change it will call the same funciton again and aggain)
        //if we change the one input filed ,it will change that one filed then the other input filed remain same ,so we have use shallow copy and the name and value properties form the object

        setuser({ ...user, [name]: value })//update user from particualr properties 

    }
    const handleSubmit = (event) => {
        event.preventDefault(); //preventDEfault is used to avoid the re render the form when its sumbitted ,in default the when the form is submitted then the wenage will automatically get referesh
        //so to avoid the refere we add the preventDefault() 
        console.log(event.target)
        setuser(initialValue)
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname" >First Name</label>
            <input type="text" ref={fnameRef} placeholder="Enter Your First Name" id="fname" name="firstname" value={user.firstname} onChange={(event)=>handleChange(event)}></input><br></br>
            <label htmlFor="lname" >Last Name</label>
            <input type="text" placeholder="Enter Your last Name" id="lname" name="lastname" value={user.lastname} onChange={(event)=>handleChange(event)}></input><br></br>
            <label htmlFor="fname" >Age</label>
            <input type="text" placeholder="Enter Age" id="age" name="age" value={user.age} onChange={(event)=>handleChange(event)}></input>
            <br></br>
            <input type="submit" value="submit" ></input>
        </form>
        {JSON.stringify(user)}
    </>)
}
export default UseRefDemo4