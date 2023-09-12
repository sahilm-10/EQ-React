import React, { Component } from 'react'
import ChildA from './ChildA';

class LifecycleA extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'sahil'
        }
        console.log("Constructor A called...");
    }

    static getDerivedStateFromProps(props,state){
        console.log("GetDerivedState of A called...");
        return null;
    }

    componentDidMount(){
        console.log("DidMount of ChildA called...");
    }
    render(){
        
        console.log("Render of ChildA called");
        return(
            <div>
                Lifecycle A
                <ChildA/>
            </div>
        )
    }
}

export default LifecycleA;