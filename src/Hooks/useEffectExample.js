import React, { useEffect, useState } from "react";

//  useEffect must be written inside a functional component. 
// useEffect  runs after every render !!!
function ClickCounter(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect(()=>{
        console.log("Inside Hook!")
        document.title = `You Have Clicked Me ${count} times!`
    },[count])
    // Here useEffect will only be called when there is a change in count, This is Conditionally running the useEffect!
    return(
        <div>
            <input type="text" placeholder="Type here"/>
            <button onClick={()=>setCount(count + 1)}>Count:{count}</button>
        </div>
    )
}

export default ClickCounter;