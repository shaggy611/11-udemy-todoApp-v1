import { RiDeleteBin2Line } from 'react-icons/ri'
import { RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

const TodoActions = ({ resetTodos, deleteCompleted, completedTodos }) => {
  return (
    <>
      <Button
        title="Reset Todos"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompleted}
        disabled={!completedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodoActions
