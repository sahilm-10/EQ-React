import axios from "axios";


export function GetUser(){
    axios.get("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.data)
        .catch(err => err)
}