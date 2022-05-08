import React from 'react'
import styles from './AddPost.module.css'
import ProfilePhoto from '../../Assets/ProfilePhoto.jpg'
import { useState } from 'react'
import AddPostModal from './AddPostModal'

function AddPost() {

    const [modalIsVisible, setModalIsVisible] = useState(false);

    const buttonHandler = (e) => {

        if(e)
            e.preventDefault();
            
        setModalIsVisible(val => {
            if(val === true)
                return false;
            else return true;
        });
    }

  return (
    <div className={styles.post}>
        {modalIsVisible && <AddPostModal buttonHandler={buttonHandler}/>}
        <img src={ProfilePhoto} alt="profile" />
        <button onClick={buttonHandler}>Start a post...</button>
    </div>
  )
}

export default AddPost