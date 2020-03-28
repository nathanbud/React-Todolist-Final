import React from 'react'

function Todos(props){

let item = props.todos;
let x = item.map(i=>{
    return(
        <div>
             <input type="text" value = {i.text}/>
        </div>
    )
})
    return(
        <div>
            {x}
        </div>
    )
}

export default Todos