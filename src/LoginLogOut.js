import { useEffect, useState } from "react";

function Login(){
    let[loggedIn,setLoggedIn]=useState('')
    useEffect(()=>{
setLoggedIn(true)
    },[])

    const togglogin=()=>{
        if(loggedIn)
       setLoggedIn(false)
    else
    setLoggedIn(true)
        }

        return(<>
        {loggedIn && 'welcome user'}
        {!loggedIn && 'please logged in'}
        <button onClick={togglogin}>{loggedIn?'logout':'login'}</button>
        </>)
    
}
export default Login