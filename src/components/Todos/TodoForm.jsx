import { useState } from 'react'
import Button from '../UI/Button'
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
        <Button
          type="submit"
          className={style.TodoForm__button}
          title="Add todo"
        >
          Add todo
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
