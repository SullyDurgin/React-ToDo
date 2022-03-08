import React, { useState, useRef } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name == '') return
    console.log(name)
    todoNameRef.current.value = null
  }

	return (
    <>
     <TodoList todos={todos} />
     <input ref={todoNameRef} type="text" />
     <button onClick={handleAddTodo}>Add Task</button>
     <button>Clear Completed Tasks</button>
     <div>0 Tasks Left To Do</div>
    </>
  )
}

export default App
