import React, { useEffect } from 'react'
import style from './CommentSection.module.css'
import Comment from './Comment'
import Button from '@mui/material/Button'
import { useState, useRef, useContext } from 'react'
import AppContext from '../../App/App-Context'

function CommentSection(props) {

  let [commentsList, setCommentsList] = useState(props.item);

  const contextValue = useContext(AppContext);

  const ref = useRef();

  const addCommentHandler = (e) => {
    e.preventDefault();

    setCommentsList(prev => [...prev, {name: contextValue.myProfile.nameOfNGO, message: ref.current.value}]);

    ref.current.value = '';
  }
  
  return (
    <div className= {style.body}>
        {!commentsList.size && <p style={{textAlign: "center"}}>No comments yet</p>}
        {commentsList.size && <div>
          {commentsList}
        </div>}

        <div>
          <textarea ref={ref} className={style.textArea} placeholder='Add a comment...' name="" id="" cols="30" rows="1"></textarea>
          <Button onClick={addCommentHandler} style={{marginTop: '0.5rem'}} variant="contained">Add Comment</Button>
        </div>
    </div>
  )
}

export default CommentSection