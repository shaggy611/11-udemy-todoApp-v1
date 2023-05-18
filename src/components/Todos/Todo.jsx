import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import style from './Todo.module.css'

const Todo = (props) => {
  return (
    <div className={`${style.Todo} ${props.done ? style.Todo__checked : ''}`}>
      <div className={style.Todo__icon}>
        <RiTodoFill className={style.Todo__list_icon} />
      </div>

      <p className={style.Todo__text}>{props.children}</p>
      <div className={style.Todo__actions}>
        <RiDeleteBin2Line
          className={style.Todo__delete}
          onClick={() => props.deleteTodo(props.id)}
        />
        <FaCheck
          className={style.Todo__check}
          onClick={() => props.onTodoChecked(props.id)}
        />
      </div>
    </div>
  )
}

export default Todo
