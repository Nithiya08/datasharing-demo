import React,{ Component } from "react";

class HelloWorld extends React.Component{
 componentDidMount(){//useEffect hook in funcional component
    console.log('component is mounting')

 }

 render(){
    return(<div>Hello World From Class componnet</div>)
 }
} 
export default HelloWorld