
import React from "react";
class GreetUser extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>{this.props.name}</div>)
    }
}

export default GreetUser

// same in function component 
// function GreetUser(props){
// return(<div>{props.name}</div>)
//}


//function GreetUSer({name}){
// return(<div>{name}</div>)
//}