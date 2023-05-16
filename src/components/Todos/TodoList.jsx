import { useState } from 'react'
import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = ({ children, onDoubleClick }) => {
  return (
    <div className="TodoList">
      {children.map((item) => {
        console.log(item)
        return <Todo key={item.id} id={item.id} onDoubleClick={onDoubleClick}>{item.text}</Todo>
      })}
    </div>
  )
}

export default TodoList
