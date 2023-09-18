import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNum,decNum,incByAmount,decByAmount } from './action-reducers/numberChange'
import Button from '@mui/material/Button';
import '../ReduxToolkit/styles/button.scss'
function Counters(){
    const dispatch = useDispatch();
    const {value} = useSelector((state)=>state.numberChange)
    return(
        <div>
            <h1>Increment/Decrement Counter</h1>
            <Button className="counter-btn" variant="outlined"  onClick={()=>dispatch(incNum())}>Increment</Button>
            {/* <Button variant="outlined">Outlined</Button> */}
            <span style={{padding:'10px'}}>{value}</span>
            <Button variant="outlined"  className="counter-btn" onClick={()=>dispatch(decNum())}>Decrement</Button>
        </div>
    )
}
export default Counters;