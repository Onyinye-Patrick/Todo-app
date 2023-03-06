import { useState } from "react"

const AddTodo = (props)=>{
    const [todoList, setTodoList] =useState("")

    const inputChange = (e) =>{
        setTodoList(e.target.value)
    }

    const submitBtn = (e) =>{
        e.preventDefault();
        props.todoList(todoList) 
       
      
    }


    return(
        <form method="post" onSubmit={submitBtn}>
           <input type="text" value={todoList} onChange={inputChange} placeholder="Enter Todo"/>
           <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo