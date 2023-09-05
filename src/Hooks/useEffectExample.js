import React, { useEffect, useState } from "react";

//  useEffect must be written inside a functional component. 
// useEffect  runs after every render !!!
function ClickCounter(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Inside Hook!")
        document.title = `You Have Clicked Me ${count} times!`
    })
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Count:{count}</button>
        </div>
    )
}

export default ClickCounter;