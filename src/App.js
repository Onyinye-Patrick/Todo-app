import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useState } from "react";


function App() {
  const[todos,setTodos]= useState([])


  const getList = (todoList) =>{
   setTodos((prevState)=>{
    return[...prevState, todoList]
   })
  }

  const deleteTodos = (id)=>{
   setTodos(todos.filter((todos, index)=> id  !== index))
  }
  return (
    <div className="container">
    <Header/>
    <AddTodo todoList={getList}/>
   {todos && todos.map((todos, index)=>(<Todos todoList={todos} onDelete={deleteTodos} id={index}/>))}
    </div>
  );
}

export default App;
