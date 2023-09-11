import axios from "axios";
import React, { useEffect, useState } from "react";

function GetUserById(){
    const [posts,setPosts] = useState([]);
    const [id,setId] = useState(1);
    const getPostById = (id) =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPosts(response.data))
            .catch(error => console.error(error))
    }
    useEffect(()=>{
        getPostById(id);
    },[id])
    console.log(posts);
    return(
        <div>
            <h1>User Title</h1>
            <input type="number" onChange={(e)=>setId(e.target.value)}/>
            <h2>
                {posts.title}
            </h2>
        </div>
    )
}
export default GetUserById;