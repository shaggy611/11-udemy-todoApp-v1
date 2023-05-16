import { useState } from 'react'
import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = ({ todos, onDoubleClick }) => {
  return (
    <div className="TodoList">
      {!todos.length && <h2 className={style.TodoList__empty}>Todo list is empty</h2>}
      {todos.map((item) => {
        return (
          <Todo
            key={item.id}
            id={item.id}
            onDoubleClick={onDoubleClick}
          >
            {item.text}
          </Todo>
        )
      })}
    </div>
  )
}

export default TodoList
