import React, { useMemo, useState } from "react";

function ClickCounterMemo(){
    const [clickone,setClickOne] = useState(0);
    const [clicktwo,setClickTwo] = useState(0);
    
    const incrementOne = () =>{
      setClickOne(clickone + 1);
          
    }
    
    const incrementTwo = () =>{
        setClickTwo(clicktwo + 1);
    }
    const isEven = useMemo(() =>{
        let i = 0;
        while(i < 4000000000)
        return clickone % 2 == 0;
    },[clickone])
    return(
        <div>
            <button onClick={incrementOne}>Counter 1: {clickone}</button>
            <span>{isEven ? 'Even':'Odd'}</span>
            <button onClick={incrementTwo}>Counter 2: {clicktwo}</button>
            
        </div>
    )
}

export default ClickCounterMemo;