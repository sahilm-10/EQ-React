import React, { useState } from "react";

function HookCounter(){
    const initialCount = 0;
    const [count,setCount] = useState(0);
    const incrementByFive = () =>{
        console.log("From Console!");
        for(let i =0 ;i < 5;i++){
           setCount(prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            <h1>Your Count:{count}</h1>
            <button onClick={()=>setCount(initialCount)}>Reset Count</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementByFive}>Increment By 5</button>
        </div>
    )
}


export default HookCounter;