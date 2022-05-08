import React from 'react';
import style from "./InputOption.module.css";

function InputOption({ Icon, title, isLiked, clickHandler }) {
  return (
  <button onClick = {clickHandler} className={style.inputOption}>
    <span className = {style.icon} style={{color: isLiked ? '#42a5f5' : 'Gray' }}>
      <Icon />
    </span> 
    <p>{title}</p>
  </button>       
  );
};

export default InputOption;