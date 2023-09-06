import { useEffect } from "react";


function useDocumentTitle(count){
    useEffect(()=>{
        document.title = `Clicked ${count} times!`
    },[count])
}

export default useDocumentTitle;


