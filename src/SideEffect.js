import { useEffect } from "react";
import { useState } from "react";

function SideEffect(){
    let [Count,setCount]=useState(0)
  useEffect(()=>{
    console.log('Call back function is useEffect')
  },[Count])



//[] -empty dependancy -the call back function in useEffect wil get executed only once

return(<>
<button onClick={()=>setCount(++Count)}>+</button>{Count}
<button onClick={()=>setCount(--Count)}>-</button>
</>)
}
export default SideEffect