import React, { useEffect, useState } from "react";
import axios from 'axios';
function FetchData(){
    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    },[])
    return(
        <div>
        <h2>Post Title</h2>
        <ul>
        {
            posts.map(post => (
                <li key={post.id}>{post.title}</li>
          ))
            
        }
        </ul>
        </div>
    )
}

export default FetchData;