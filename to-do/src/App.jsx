import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
	return (
    <>
     <TodoList todos={todos} />
     <input type="text" />
     <button>Add Task</button>
     <button>Clear Completed Tasks</button>
     <div>0 Tasks Left To Do</div>
    </>
  )
}

export default App
