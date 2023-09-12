import React, { Component } from 'react'
import ChildA from './ChildA';

class UpdateChildA extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'sahil'
        }
        console.log("Constructor A called...");
    }
    static getDerivedStateFromProps(props,state){
        console.log("GetDerivedState of ChildA called...");
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should Update of ChildA Called...");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,PrevState){
        console.log("Snapshot before update of ChildA called..");
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Did Update of ChildA called...");
    }
    render(){
        
        console.log("Render of ChildA called");
        return(
            <div>
                Update Lifecycle Child A
            </div>
        )
    }
}

export default UpdateChildA;