import { useState } from 'react'
import style from './TodoForm.module.css'

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className={style.TodoForm}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(input)
          setInput('')
        }}
      >
        <input
          type="text"
          name="todoWrite"
          value={input}
          placeholder="Enter new todo"
          className={style.TodoForm__input}
          onInput={handleInput}
        />
        <button
          type="submit"
          className={style.TodoForm__button}
        >
          Add todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm
