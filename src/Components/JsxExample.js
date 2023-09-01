import React from "react";

function FullName(){
    // JSX written inside return() -> Makes code simpler and elegant.
    return(
        <div>
            <h1>Hello Sahil Malgundkar</h1>
        </div>
    )

    // Other way to write the same code 
    // .createElement -> (tag,attribute[id,class],children[anyNumber])
    // return React.createElement('div',null,React.createElement('h1',null,'This is From React.createElement'))
}





export default FullName;