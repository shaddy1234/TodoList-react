import React from 'react'
import './c.css'

function Todo({ todo }) {
  
  return (
    <div className='todo-item'>
      <li>{todo.name}
      <button>Delete</button>
      </li>
      
    </div>
  )
}

export default Todo

