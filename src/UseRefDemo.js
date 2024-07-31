import { useRef } from 'react'
function UseRefDmo(){
    let pref=useRef()
    const handleCLick=()=>{
   pref.current.style.fontWeight='bold'
   pref.current.style.color='blue'
    }
    return(<>
    <p ref={pref} >This is a paragraph</p>
    {/* when the button is clicked ,change teh style of the paragph */}
    <button onClick={handleCLick}>Click</button>
    </>)
}
export default UseRefDmo