import style from './Button.module.css'

const Button = (props) => {
  const { children, disabled = false } = props

  return (
    <button
      {...props}
      disabled={disabled}
      className={style.Button}
    >
      {children}
    </button>
  )
}

export default Button
