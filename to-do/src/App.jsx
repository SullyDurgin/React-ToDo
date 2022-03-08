import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false}])
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
