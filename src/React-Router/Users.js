import React from "react";
import { Outlet } from "react-router-dom";
function Users(){
    return(
        <div>
            <h2>User1</h2>
            <h2>User2</h2>
            <h2>User3</h2>
            <Outlet/>
        </div>
    )
}

export default Users;