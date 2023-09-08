import React from "react";
import { useParams } from "react-router-dom";
function UserDetails(){
    // params extract the dynamic parameter we pass in. we can then use this for mapping based on userId
    const params = useParams();
    const userId = params.userId;
    return(
        <div>Details about User {userId}</div>
    )
}

export default UserDetails;