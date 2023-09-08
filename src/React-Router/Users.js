import React from "react";
import { Outlet ,useSearchParams} from "react-router-dom";
function Users(){
    const [searchParam,setSearchParam] = useSearchParams();
    const showActiveUsers = searchParam.get('filter') === 'active'
    return(
        <div>
            <h2>User1</h2>
            <h2>User2</h2>
            <h2>User3</h2>
            <button onClick={()=>setSearchParam({filter:'active'})}>Active</button>
            <button onClick={()=>setSearchParam()}>Reset</button>
            {
                showActiveUsers ? 
                (<h2>Showing Active Users</h2>):(
                    <h2>None to Show</h2>
                )
            }
            <Outlet/>
        </div>
    )
}

export default Users;