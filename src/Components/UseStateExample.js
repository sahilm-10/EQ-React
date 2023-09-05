import React from "react";
import { useState } from "react";

function UseStateWithObject(){
    const [name,setName] = useState({firstName:'',lastName:''})
    return(
        <div>
            <input type="text" value={name.firstName}/>
            <input type="text" value={name.lastName}/>
            <h2>{JSON.stringify(name)}</h2>
            
        </div>   
    )
}

export default UseStateWithObject;