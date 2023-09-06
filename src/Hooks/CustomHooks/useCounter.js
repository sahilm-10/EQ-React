import { useState } from "react";
function useCounter(initialCount = 0,value){
    const [counter,setCounter] = useState(0);

    const incrementCounter = () =>{
        setCounter(prevCount => prevCount + value)
    }
    const decrementCounter = () =>{
        setCounter(prevCount => prevCount - value)
    }
    const resetCounter = () =>{
        setCounter(initialCount);
    }
    return [counter,incrementCounter,decrementCounter,resetCounter];
}

export default useCounter;