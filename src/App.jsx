import './App.css'
import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import generateID from './utils/idGenerator'

function App() {
  const [inputTxtFromForm, setInputTxtFromForm] = useState([])

  const addTodoHandler = (txt) => {
    setInputTxtFromForm([...inputTxtFromForm, { text: txt, id: generateID(7) }])
  }

  const todoDeletionHandler = (id) => {
    const arr = [...inputTxtFromForm].filter((item) => item.id !== id)
    setInputTxtFromForm(arr)
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList
        onDoubleClick={todoDeletionHandler}
        todos={inputTxtFromForm}
      ></TodoList>
    </div>
  )
}

export default App
