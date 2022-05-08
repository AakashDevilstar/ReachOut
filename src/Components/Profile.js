import React from "react"
import style from "./Profile.module.css"
import ProfilePhoto from '../Assets/ProfilePhoto.jpg'

function Profile(props) {
  return (
    <div className={style.profile_outerBox}>
      
      <div className={style.profile}>
        <h3>{props.item.nameOfNGO}</h3>
        <img src={ProfilePhoto} alt="profile" />
      </div>

      <div className={style.profile__content}>
    
        <div className={style.row}>
          <h6>Country:</h6>
          <p>{props.item.country}</p>
        </div>

        <hr />

        <div className={style.row}>
          <h6>State:</h6>
          <p>{props.item.state}</p>
        </div>

        <hr />

        <div className={style.row}>
          <h6>Address:</h6>
          <p>{props.item.address}</p>
        </div>

        <hr />

        <div className={style.row}>
          <h6>Email:</h6>
          <p>{props.item.email}</p>
        </div>
        
        <hr />

        <div className={style.row}>
          <h6>Number:</h6>
          <p>{props.item.number}</p>
        </div>

        <hr />

      </div>
    </div>
  );
}

export default Profile;
