import { useState } from "react";
import DataSharingChild from "./DataSharingChild";
function DataSharingParent(){
    let [color,setColor]=useState('')
    const chooseColor=(color)=>{
setColor(color)
    }
    return(<>
    <b>Parent Component</b>
    <div style={{color:color}}>choose color is {color}</div><br></br>
    <DataSharingChild chooseColor={chooseColor}></DataSharingChild>
    </>)

    
}
export default DataSharingParent