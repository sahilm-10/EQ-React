import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function UpdateDocTitle(){
    const [count,setCount] = useState(0);

    // Custom Hook
    useDocumentTitle(count);
    
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Click-{count}</button>
        </div>
    )
}

export default UpdateDocTitle;