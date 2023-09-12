import React, { Component } from 'react'
import ChildA from './ChildA';
import UpdateChildA from './UpadteChildA';

class UpdateLifecycleA extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'sahil'
        }
        console.log("Constructor A called...");
    }
    updateChild(){
        this.setState({
            name:"Rahul"
        })
    }
    static getDerivedStateFromProps(props,state){
        console.log("GetDerivedState of A called...");
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should Update Called...");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,PrevState){
        console.log("Snapshot before update called..");
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Did Update called...");
    }
    
    render(){
        
        console.log("Render of ChildA called");
        return(
            <div>
                Update Lifecycle A
                <button onClick={this.updateChild}>Update</button>
                <UpdateChildA/>
            </div>
        )
    }
}

export default UpdateLifecycleA;