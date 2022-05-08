import React from 'react'
import style from './TextError.module.css'

function TextError(props) {
  return (
    <div className={style.error}>{props.children}</div>
  )
}

export default TextError