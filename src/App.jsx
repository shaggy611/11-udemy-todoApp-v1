import { useState } from 'react'
import { v4 as generateID } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodoActions'
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

  const todoCheckedHandler = (id) => {
    // const index = todoText.findIndex((todo) => todo.id === id)
    // const arr = [...todoText]
    // arr[index].isCompleted
    //   ? (arr[index].isCompleted = false)
    //   : (arr[index].isCompleted = true)
    // setTodoText(arr)

    setTodoText(
      todoText.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodoHandler = () => {
    setTodoText([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodoText(todoText.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todoText.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1 className="App__title">ToDo App</h1>
      <TodoForm onSubmit={addTodoHandler} />
      {todoText.length !== 0 && (
        <TodoActions
          resetTodos={resetTodoHandler}
          deleteCompleted={deleteCompletedTodosHandler}
          completedTodos={!!completedTodoCount}
        />
      )}
      <TodoList
        deleteTodo={todoDeletionHandler}
        onTodoChecked={todoCheckedHandler}
        todos={todoText}
      />

      {!!completedTodoCount && (
        <h2 className="Todo__completed_count">{`You have ${completedTodoCount} completed todo${
          completedTodoCount <= 1 ? '' : 's'
        } `}</h2>
      )}
    </div>
  )
}

export default App
