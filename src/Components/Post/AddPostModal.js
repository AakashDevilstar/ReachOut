import React from 'react'
import styles from './AddPostModal.module.css'
import { Fragment, useContext, useRef } from 'react'
import ReactDOM from 'react-dom'
import ProfilePhoto from '../../Assets/ProfilePhoto.jpg'
import AppContext from '../../App/App-Context'
import Button from '@mui/material/Button'

function AddPostModal(props) {

    const values = useContext(AppContext);

    const ref = useRef();
    
    const postSubmit = (e) => {
        e.preventDefault();
        
        const obj = {
            id: Math.floor(Math.random() * 82929822),
            noOfLikes : 0,
            noOfComments : 0,
            comments: [{
                nameOfNGO: "",
                message: ""
            }],
            isLiked: false,
            name: values.myProfile.nameOfNGO,
            message: ref.current.value,
            userId: values.myProfile.userId
        }

        fetch('https://reachout-9b1e7-default-rtdb.firebaseio.com/Posts.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(obj),
        })
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
        })
        .catch(e => console.log(e));

        props.buttonHandler();
    }
    
    const Backdrop = () => {
        return <div className = {styles.backdrop}></div>
    }

    const ModalOverlay = (props) => {
        
        const values = useContext(AppContext);
    
        return (
            <div className = {styles.modal}>
    
                <div className={styles.head}>
                    <h6>Add a post</h6>
                    <button onClick={props.buttonHandler}>x</button>
                </div>
    
                <hr />
    
                <div className={styles.addPost}>
                    <label htmlFor="addpost">
                        <img src={ProfilePhoto} alt="" />
                        <h6>{values.myProfile.nameOfNGO}</h6>
                    </label>
    
                    <textarea ref = {ref}  placeholder='Write something...'/>
    
                    <Button onClick={postSubmit} variant="contained">Add Post</Button>
                </div>
            </div>
        )
    }

    const overlayElement = document.querySelector(".modalOverlay");

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, overlayElement)}
            {ReactDOM.createPortal(<ModalOverlay buttonHandler={props.buttonHandler} />, overlayElement)}
        </Fragment>
    )
}

export default AddPostModal