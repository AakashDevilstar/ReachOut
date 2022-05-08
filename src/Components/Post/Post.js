import React , { useState, useRef } from 'react'
import CommentSection from './CommentSection'
import style from "./Post.module.css"
import InputOption from './InputOption'
import {BsChatLeftText} from "react-icons/bs"
import {AiOutlineLike , AiFillLike} from "react-icons/ai"
import { useEffect } from 'react'
import ProfilePhoto from '../../Assets/ProfilePhoto.jpg'

function Post(props) {

  const [openComment , setopenComment] = useState(false);
  const [liked, setLiked] = useState(false);

  const commentsList = [...props.item.comments];
  commentsList.shift();
  
  useEffect(() => {
    if(props.item.isLiked)
    setLiked(true);
  }, [props.item.isLiked]);

  const ref1 = useRef();

  const likeHandler = (e) =>
  {
    e.preventDefault();
    if(liked) {
      setLiked(false);
      ref1.current.style.color = 'Gray';
    } else {
      setLiked(true);
      ref1.current.style.color = '#42a5f5';
    }
  }

  const commentHandler = () =>
  {
    if(openComment)
     setopenComment(false);
     else
     setopenComment(true);
  }

  let numberOfLikes = props.item.noOfLikes;
  if(liked)
    numberOfLikes += 1;

  return (
    <div className = {style.post}>
      <div className= {style.post__header}>
        <img src={ProfilePhoto} alt="profile" />
        <div className= {style.post__info}>
          <h2>{props.item.name}</h2>
        </div>
      </div>
      <div className={style.post__body}>
        <p>{props.item.message}</p>
      </div>
        <div className={style.post__stats}>
        <p>{numberOfLikes} Likes</p>
        <p>{props.item.noOfComments} Comments</p>
        </div>
      <div className= {style.post__buttons}>

        <InputOption ref = {ref1} clickHandler={likeHandler} Icon = { liked ? AiFillLike : AiOutlineLike} title="Like" isLiked = {liked} />
        <InputOption clickHandler={commentHandler} Icon = {BsChatLeftText} title="Comment" isLiked = {false} />
      </div>
      
      {openComment && <>
        <hr />
        <CommentSection item = {commentsList}></CommentSection>
      </>}
    </div>
  );
}

export default Post