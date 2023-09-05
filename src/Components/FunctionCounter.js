// useState hook used here to change the state of the Component.
import React, { useState } from "react";

function FuncCounter(){
    const [count,setCount] = useState(0);
    return(
        <button onClick={()=>setCount(count + 1)}>Count:{count}</button>
    )
}

export default FuncCounter;