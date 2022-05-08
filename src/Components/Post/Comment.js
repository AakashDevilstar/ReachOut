import React from 'react'
import style from './Comment.module.css'
import ProfilePhoto from '../../Assets/ProfilePhoto.jpg'

function Comment({name, message}) {
  return (
    <div className= {style.main}>
        <div className={style.profile}><img src={ProfilePhoto} alt="profile"></img></div>
        <div className={style.body}>
            <h4>{name}</h4>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Comment