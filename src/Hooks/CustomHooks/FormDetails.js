import React, { useState } from "react";
import useInput from "./useInput";

function FormDetails(){
    // const [firstName,setFirstName] = useState('');
    // const [lastName,setLastName] = useState('');

    const [firstName,bindFirstName,resetFirstName] = useInput('')
    
    const [lastName,bindLastName,resetLastName] = useInput('')
    
    const submitHandler = (e) =>{
        e.preventDefault();
        alert(`Your FirstName is ${firstName} and your LastName is ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input {...bindFirstName}
                type="text" style={{marginBottom:'10px'}}
                />
                <br></br>
                <input {...bindLastName}
                type="text"
                
                />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormDetails;