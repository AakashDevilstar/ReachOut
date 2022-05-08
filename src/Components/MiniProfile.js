import React from 'react'
import styles from './MiniProfile.module.css'
import ProfilePhoto from '../Assets/ProfilePhoto.jpg'
import { useContext } from 'react'
import AppContext from '../App/App-Context'
import { NavLink } from 'react-router-dom'

function MiniProfile() {

  const values = useContext(AppContext);

  return (
    <div className={styles.box}>
        <NavLink to={'/myProfile'} style={{color: "Black", textDecoration: "none"}}>
          <div className={styles.linkBox}>
            <img className={styles.profile} src={ProfilePhoto} alt="profile" />
            <h6>{values.myProfile.nameOfNGO}</h6>
          </div>
        </NavLink>
    </div>
  )
}

export default MiniProfile