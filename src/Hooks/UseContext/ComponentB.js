import React,{useContext}from "react";
import ComponentC from "./ComponentC";
import { UserContext, MainContext} from "./ComponentA";


function ComponentB(){
    const user = useContext(UserContext);
    const text = useContext(MainContext);
    return(
        <div>
            {user} : {text}
        </div>
    )
}

export default ComponentB