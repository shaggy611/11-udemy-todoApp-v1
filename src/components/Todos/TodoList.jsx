import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, onTodoChecked }) => {
  return (
    <div className={style.TodoList}>
      {!todos.length && (
        <h2 className={style.TodoList__empty}>Todo list is empty</h2>
      )}
      {todos.map((item) => {
        return (
          <Todo
            key={item.id}
            id={item.id}
            done={item.isCompleted}
            deleteTodo={deleteTodo}
            onTodoChecked={onTodoChecked}
          >
            {item.text}
          </Todo>
        )
      })}
    </div>
  )
}

export default TodoList
