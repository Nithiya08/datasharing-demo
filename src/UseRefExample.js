import {useRef} from 'react';
function UseRefDemo3(){
    let inputRef=useRef()
    const handle=()=>{
        console.log(inputRef.current)
        console.log(inputRef.current.value)

    }
    return(<>
    <b>Enter Your Name</b>
    <input type="text" ref={inputRef} onChange={handle}></input>
    
    </>)
}
export default UseRefDemo3