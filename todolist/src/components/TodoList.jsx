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

  return (
    <div className='todo-list-container'>
      <h1>ToDo List</h1>
      <ul>{todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}</ul>
    </div>
  )
}

export default TodoList;


