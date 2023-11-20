import React, { useState } from 'react'
import Todo from './Todo'
import './c.css'

function TodoList() {
  const [todos, setTodos]= useState([
    {id: 1, name:"Watch Movie"},
    {id: 2, name:"Write Code"},
    {id: 3, name:"Read a Novel"}
  ])
  const [newTodo, setNewTodo]=useState('')

  const AddTodo = () => {
    if(newTodo.trim() === '')return;
      const todo = {id:Date.now(), name:newTodo}
      setTodos([...todos, todo])
      setNewTodo('')
  }

  return (
    <div className='todo-list-container'>
      <h1>Todo List</h1>
      <div className='todo-input'>
        <input 
          placeholder='Add New Todo'
          value={newTodo}
          onChange={(e)=> setNewTodo(e.target.value)}
        />
        <button onClick={AddTodo}>Add</button>
      </div>
      <ul>{todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}</ul>
    </div> 
  )
}

export default TodoList;


