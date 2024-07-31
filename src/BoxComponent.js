function BoxComponent({bgcolor,text,height,weight}){
    return(<>

    <div style={
        {padding:'20px',
            height:height,
            width:weight,
            'borderRadius':'10px',
            'backgroundColor':bgcolor}
            
    }>
        
    {text}
</div>
    </>)
}
export default BoxComponent