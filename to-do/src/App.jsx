import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(e) {
    
  }

	return (
    <>
     <TodoList todos={todos} />
     <input type="text" />
     <button onClick={handleAddTodo}>Add Task</button>
     <button>Clear Completed Tasks</button>
     <div>0 Tasks Left To Do</div>
    </>
  )
}

export default App
