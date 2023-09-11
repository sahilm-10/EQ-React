import React, { useEffect, useState } from "react";
import axios from "axios";

function GetUsersByAxios(){
    const [posts,setPosts] = useState([]);
    const getPosts = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error))
    }
    useEffect(()=>{
        getPosts();
    },[])
    console.log(posts);
    return(
        <div>
            <h1>Post Title</h1>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default GetUsersByAxios;