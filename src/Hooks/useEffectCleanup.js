import React, { useEffect, useState } from "react";

function MouseCleanUpExample(){

    const [X,setX] = useState(0);
    const [Y,setY] = useState(0);

    const logMousePosition = (e) =>{
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log("UseEffect Called");
        window.addEventListener('mousemove',logMousePosition);

        // If need to clean up , you can do it here ! return a function in useEffect after the function invocation of your listeners.

        return()=>{
            console.log("Component Unmounting Code");
            window.removeEventListener('mousemove',logMousePosition);

        }
    },[])

    
    return(
        <div>
            <h2>X Position:{X}</h2>
            <h2>Y Position:{Y}</h2>
            
        </div>
    )
}

export default MouseCleanUpExample;