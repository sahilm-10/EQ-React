import React from "react";
import {UserContext} from './ComponentA'
function ComponentC(){
    return(
        <div>
        <UserContext.Consumer>
        {
            user => {
                return(
                    <div>
                        User Context Value :{user}
                    </div>
                )
            }
        }
        </UserContext.Consumer>
        </div>
    )
}

export default ComponentC