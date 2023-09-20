import React from "react";

function Input({type,onKeyDown,placeholder},ref){
    return(
        <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />
    )
}


export default React.forwardRef(Input);