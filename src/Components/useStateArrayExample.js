import React, { useState } from "react";

function UseStateArray(){
    const [items,setItems] = useState([]);
    const addItem = () => {
        console.log("Console...!");
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return(
        <div>
            <button onClick={addItem}>Add a Number</button>
            <ul>
            {
                items.map(item=>{
                    <li key={item.id}>{item.value}</li>
                    console.log("Inside Map");
                })
                
            }
            </ul>
        </div>
    )
}

export default UseStateArray;