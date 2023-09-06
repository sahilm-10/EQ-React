import React, { useEffect, useRef } from "react";


function FocusInput(){
    const inputElement = useRef(null);

    useEffect(()=>{
        //foucs on input element using useRef
        inputElement.current.focus();
    },[])

    return(
        <div>
            <input ref={inputElement} type="text"/>
        </div>
    )
}

export default FocusInput;