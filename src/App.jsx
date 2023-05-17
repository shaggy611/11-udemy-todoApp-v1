import { useState } from 'react'
import { v4 as generateID } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
// import generateID from './utils/idGenerator'

function App() {
  const [todoText, setTodoText] = useState([])

  const addTodoHandler = (txt) => {
    setTodoText([
      ...todoText,
      { text: txt, id: generateID(7), isCompleted: false },
    ])
  }

  const todoDeletionHandler = (id) => {
    const arr = [...todoText].filter((item) => item.id !== id)
    setTodoText(arr)
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList
        onDoubleClick={todoDeletionHandler}
        todos={todoText}
      ></TodoList>
    </div>
  )
}

export default App
