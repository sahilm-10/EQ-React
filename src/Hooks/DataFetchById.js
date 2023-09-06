import React, { useEffect, useState } from "react";
import axios from "axios";
function GetById(){
    const[post,setPost] = useState({});
    const[id,setId] = useState(1);
    const[idFromBtnClick,setIdFromBtnClick] = useState(1);

    const FetchPost = () =>{
        setIdFromBtnClick(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    },[idFromBtnClick])
    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={FetchPost}>Fetch Post</button>
            <h2>{post.title}</h2>
        </div>
    )
}

export default GetById;