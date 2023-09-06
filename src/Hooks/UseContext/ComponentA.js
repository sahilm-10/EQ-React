import React from "react";
import ComponentB from "./ComponentB";


export const UserContext = React.createContext();
export const MainContext = React.createContext();
function ComponentA(){
    return(
        <div>
        <UserContext.Provider value={'Sahil'}>
            <MainContext.Provider value={'This is another Provider'}>
                <ComponentB/>
            </MainContext.Provider>
        </UserContext.Provider>
        </div>
    )
}

export default ComponentA