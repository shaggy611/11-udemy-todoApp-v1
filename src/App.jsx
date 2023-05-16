import './App.css'
import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import generateID from './utils/idGenerator'

function App() {
  const [inputTxtFromForm, setInputTxtFromForm] = useState([])

  const handleTodoDeletion = (id) => {
    const arr = [...inputTxtFromForm].filter((item) => item.id !== id)
    setInputTxtFromForm(arr)
  }

  const takeInputFromTodoForm = (txt) => {
    setInputTxtFromForm([...inputTxtFromForm, { text: txt, id: generateID(7) }])
  }

  return (
    <div className="App">
      <TodoForm onSubmit={takeInputFromTodoForm} />
      <TodoList onDoubleClick={handleTodoDeletion}>{inputTxtFromForm}</TodoList>
    </div>
  )
}

export default App
