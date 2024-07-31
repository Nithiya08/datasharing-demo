function DataSharingChild({chooseColor}){
const handle=(event)=>{
    //pass the color value to the parent
    chooseColor(event.target.value)
}
return(<>
<b>Child Component</b>
<select onChange={handle}>
    <option value='red'>Red</option>
    <option value='blue'>blue</option>
    <option value='green'>green</option>
    <option value='orange'>orange</option>
</select>
</>)


}
export default DataSharingChild