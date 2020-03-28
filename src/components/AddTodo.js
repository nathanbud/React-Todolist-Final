import React from 'react'

function AddTodo({inputtodo, addtodo, todos}){
    return(
        <div>
            <form className="todo-form" onSubmit= {addtodo}>
                <input type="text" placeholder="What to do..." onChange = {inputtodo} value = {todos.currentTodo.text} />
                <button className="waves-effect waves-light btn-small" >ADD</button>
            </form>
        </div>
        )
    }


export default AddTodo;