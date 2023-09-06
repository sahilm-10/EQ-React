import React from "react";
import ComponentC from "./ComponentB";


export const UserContext = React.createContext();
function ComponentA(){
    return(
        <div>
        <UserContext.Provider value={'Sahil'}>
            <ComponentC/>
        </UserContext.Provider>
        </div>
    )
}

export default ComponentA