import React from "react";
import Counter from "../../Components/ClassCounter";
import {useSelector, useDispatch} from 'react-redux'
import { incNum,decNum } from "../actions";
function CounterButtons(){
    const myState = useSelector((state)=>state.changeNumber)
    return(
        <div>
            <button>Increment</button>
            <span>{0}</span>
            <button onClick={()=>{console.log('decrement clicked!');}}>Decrement</button>
        </div>
    )
}

export default CounterButtons;