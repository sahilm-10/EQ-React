import React, {Component} from 'react'

class FormDetailsClass extends Component{
    constructor(){
        super();
        this.state={
            name:'Sahil',
            password:'test'
        }

    }
    changeUserName = (e) =>{
        this.setState({
            name: e.target.value,
        })
        e.preventDefault();
    }
    changePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
        e.preventDefault();
    }
    handleSubmit = () =>{
        alert(`Your name is ${this.state.name} and Password is ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Form</h1>
                <label>Username</label>
                <input type='text' value={this.state.name} onChange={this.changeUserName}/>
                <br></br>
                <label>Password</label>
                <input type='password' value={this.state.password} onChange={this.changePassword}/>
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormDetailsClass;