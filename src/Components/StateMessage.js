import React , {Component} from "react";

class Message extends Component{

    constructor(){
        super();
        this.state={
            message:"Welcome"
        }
    }

    handleSubscribe(){
        this.setState({
            message:"Thanks for Subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message} {this.props.name}</h1>
                <button onClick={()=>this.handleSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;