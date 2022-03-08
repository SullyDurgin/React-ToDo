import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) //this effect stores our todos but will not load them, you need another effect for that

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
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
