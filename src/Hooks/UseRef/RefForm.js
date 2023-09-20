import React, { useEffect, useRef } from "react";
import Input from "./Input";

function RefForm(){
    const firstNameRef = useRef(null);
    const lasttNameRef = useRef(null);
    const submitRef = useRef(null);
    
    useEffect(()=>{
        firstNameRef.current.focus();
    },[])
    const submitHandler = () =>{
        alert('Form submitted');
    }
    const firstKeyDown = (e) =>{
        if(e.key === 'Enter'){
            lasttNameRef.current.focus();
        }
    }
    const lastKeyDown = (e) =>{
        if(e.key === 'Enter'){
            submitRef.current.focus();
        }
    }
    return(
        <div>
            <Input type="text" onKeyDown={firstKeyDown} ref={firstNameRef} placeholder="FirstName"/>
            <Input type="text" onKeyDown={lastKeyDown} ref={lasttNameRef} placeholder="LastName"/>
            <button ref={submitRef} onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default RefForm;