import React, { useState } from "react";
import useCounter from "./useCounter";

function CustomCounter(){
    const[counter,incrementCounter,decrementCounter,resetCounter] = useCounter(10,10);
    return(
        <div>
            <h2>Count:{counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
            
        </div>
    )
}
export default CustomCounter;