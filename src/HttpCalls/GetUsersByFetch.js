// https://jsonplaceholder.typicode.com/posts

import React, { useEffect, useState } from "react";

function GetUsersByFetch(){
    const [posts,setPosts] = useState([]);

    const getUsers = () =>{
         fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => console.log(response.json()))
            .then(response => setPosts(response.json()))
            .catch(error => console.error(error))
    }
    useEffect(()=>{
        getUsers();
    },[])
    return(
        <div>
            <h2>Users Posts</h2>
            <div>
            {posts ? <pre>{JSON.stringify(posts, null, 2)}</pre> : 'Loading...'}
            </div>
        </div>
    )
}

export default GetUsersByFetch;