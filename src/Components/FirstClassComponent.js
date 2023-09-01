import React,{Component} from "react";

class WelcomeMessage extends Component{
    // Class Components are Statefull,Smart and they have Lifecycle methods as compared to FC.
    render(){
        return (
        <div>
            <h1>This is a Class Component && My Name is {this.props.name} and My age is {this.props.age}</h1>
            {this.props.children}
        </div>
        )
    }
}

export default WelcomeMessage;