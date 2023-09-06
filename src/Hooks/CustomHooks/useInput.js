import  { useState } from "react";

function useInput(initialValue){
    const [name,setName] = useState(initialValue);

    const reset = () => {
        setName(initialValue);
    }

    const bind={
        name:name,
        onChange: e =>{
            setName(e.target.value)
        }
    }
    return [name,bind,reset]
}

export default useInput;