import React, { useEffect, useState } from "react";
import axios from "axios";
function GetById(){
    const[post,setPost] = useState({});
    const[id,setId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    },[id])
    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <h2>{post.title}</h2>
        </div>
    )
}

export default GetById;