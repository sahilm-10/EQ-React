import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    handleCounter=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        return(
        <button onClick={this.handleCounter}>Click Me {this.state.count}</button>
        )
    }
}

export default Counter;