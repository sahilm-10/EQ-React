import React from 'react'

// Functional Component -> Nothing just a Function which optionally takes inputs as properties(props) and returns a JSX.

function GreetMessage(props){
    return (
    <div>
        <h1>This is a Functional Component & My Name is {props.name} and Age is {props.age}</h1>
        {props.children}
    </div>
    )
}

export default GreetMessage;