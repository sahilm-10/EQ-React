import React,{useState} from "react";
import MouseCleanUpExample from "./useEffectCleanup";

function CleanUpMouse(){
    const [display,setDisplay] = useState(true);
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {display && <MouseCleanUpExample/>}
        </div>
    )
}

export default CleanUpMouse;