import style from './Button.module.css'

const Button = ({ onClick, children, title, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={style.Button}
    >
      {children}
    </button>
  )
}

export default Button
