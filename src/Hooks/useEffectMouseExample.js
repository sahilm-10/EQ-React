import React, { useEffect, useState } from "react";

function MouseExample(){

    const [X,setX] = useState(0);
    const [Y,setY] = useState(0);

    const logMousePosition = (e) =>{
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log("UseEffect Called");
        window.addEventListener('mousemove',logMousePosition);
    },[])

    
    return(
        <div>
            <h2>X Position:{X}</h2>
            <h2>Y Position:{Y}</h2>
            
        </div>
    )
}

export default MouseExample;