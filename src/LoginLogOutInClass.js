import React from "react";
class ConditoanlRendering extends React.Component{
 constructor(props){
    super(props);
    this.state={
        isLoggedIn:false
    };
 }
 toggleLogin=()=>{
    this.setState({isLoggedIn: !this.state.isLoggedIn});
 };
 render(){
    return(
        <div>
            {this.state.isLoggedIn?(
                <h1>Welcome Back</h1>
            )
        :(
            <h2>Please Login</h2>
        )}
        <button onClick={this.toggleLogin}>
            {this.state.isLoggedIn?'logOut':'login'}
        </button>
        </div>
    )
 }
}
export default ConditoanlRendering