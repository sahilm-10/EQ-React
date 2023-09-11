import React, { useState } from "react";
// object , change one key value pair object.
function TestObject(){
    const objectTest = {
        id:1,
        name:"Sahil",
        age:22,
    }
    const [objectName,setObjectName] = useState(objectTest);
    console.log(objectName);
    
    return(
        <div>
            <h2>ID: {objectName.id}</h2>
            <h2>AGE: {objectName.age}</h2>
            <h2>NAME: {objectName.name}</h2>
            <input type="text" defaultValue={objectName.name} placeholder="Enter Name" onChange={(e)=> setObjectName({...objectTest,name:e.target.value})}/>
        </div>
    )
}

export default TestObject;