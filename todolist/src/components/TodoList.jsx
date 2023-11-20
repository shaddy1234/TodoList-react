import React, { useState } from 'react'
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos]= useState([
    {id: 1, name:"Watch Movie"},
    {id: 2, name:"Write Code"},
    {id: 3, name:"Read a Novel"}
  ])
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>{todos.map((todo) => (
        <Todo key={todo.id} todo={todos.name}/>
      ))}</ul>
    </div>
  )
}

export default TodoList
