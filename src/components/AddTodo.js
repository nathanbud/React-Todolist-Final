import React from 'react'

function AddTodo({addtodo}){
    return(
        <div>
            <form className="todo-form">
                <input type="text" placeholder="What to do..." onChange = {addtodo}/>
                <button className="waves-effect waves-light btn-small" >ADD</button>
            </form>
        </div>
        )
    }


export default AddTodo;