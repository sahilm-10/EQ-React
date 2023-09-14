import axios from "axios";
export function GetUserAsync(){
    axios.get("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.data)
        .catch(err => err)
}