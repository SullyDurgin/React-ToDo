import React from 'react'
import TodoList from './TodoList'

function App() {
	return (
    <>
     <TodoList />
     <input type="text" />
     <button>Add Task</button>
     <button>Clear Completed Tasks</button>
    </>
  )
}

export default App
