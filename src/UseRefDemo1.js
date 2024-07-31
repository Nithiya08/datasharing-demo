import { useRef } from "react";
function UseRefDemo1(){
    let imgRef=useRef()
    const handle=()=>{
      imgRef.current.height=400
      imgRef.current.width=400
    }
    return (<>

    <img src="logo192.png" ref={imgRef} onClick={handle}></img>
    </>)
}
export default UseRefDemo1