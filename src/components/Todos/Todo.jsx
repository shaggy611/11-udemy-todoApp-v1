import { RiTodoFill } from 'react-icons/ri'
import style from './Todo.module.css'

const Todo = (props) => {
  return (
    <div
      className={style.Todo}
      onDoubleClick={() => props.onDoubleClick(props.id)}
    >
      <div className={style.Todo__icon}>
        <RiTodoFill className={style.Todo__list_icon} />
      </div>

      <p className={style.Todo__text}>{props.children}</p>
    </div>
  )
}

export default Todo
