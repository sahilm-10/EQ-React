import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNum,decNum,incByAmount,decByAmount } from './action-reducers/numberChange'
function Counters(){
    const dispatch = useDispatch();
    const {value} = useSelector((state)=>state.numberChange)
    return(
        <div>
            <button onClick={()=>dispatch(incNum())}>Increment</button>
            <span style={{padding:'10px'}}>{value}</span>
            <button style={{marginBottom:'30px'}} onClick={()=>dispatch(decNum())}>Decrement</button>
        </div>
    )
}
export default Counters;