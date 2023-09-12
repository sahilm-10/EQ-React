import React, { Component } from 'react'

class ChildA extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'sahil'
        }
        console.log("Constructor ChildA called...");
    }

    static getDerivedStateFromProps(props,state){
        console.log("GetDerivedState of ChildA called...");
        return null;
    }

    componentDidMount(){
        console.log("DidMount of ChildA called...");
    }
    render(){
        
        console.log("Render of ChildA called");
        return(
            <div>
                Child A
            </div>
        )
    }
}

export default ChildA;