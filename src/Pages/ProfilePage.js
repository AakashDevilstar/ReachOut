import React from 'react'
import { useParams } from 'react-router-dom'
import Profile from '../Components/Profile'
import style from './ProfilePage.module.css'
import Header from '../Components/Header'
import { useState, useEffect } from 'react'
import Post from '../Components/Post/Post'
import Button from '@mui/material/Button'

function ProfilePage() {

  const [postList, setPostList] = useState([]);
  const [userData, setUserData] = useState({});

  const params = useParams();
  console.log(params);

  let arr = [];
  
  const getUserData = async () => {
    try {
      
      const url1 = `https://reachout-9b1e7-default-rtdb.firebaseio.com/ReachOut.json?orderBy="nameOfNGO"&equalTo="${params.profile}"`;
      const response1 = await fetch(url1);
      const data1 = await response1.json();
      for(let obj in data1) {
        setUserData(data1[obj]);
      }

    } catch (error) {
      console.log(error);
    }
  }

//   const getUserPosts = async () => {
//       try {
        
//         const url2 = `https://reachout-9b1e7-default-rtdb.firebaseio.com/Posts.json?orderBy="userId"&equalTo=${userData.userId}`;
//         const response2 = await fetch(url2);
//         const data2 = await response2.json();
//         for(let obj in data2) {
//             arr.push(data2[obj]);
//         }
//         console.log(arr);
//         const list = arr.map(obj => {
//             return <Post item = {obj} />
//         })

//         list.reverse();

//         setPostList(list); 

//       } catch (error) {
//           console.log(error);
//       }
//   }

  useEffect(() => {
    getUserData();
    // getUserPosts();
  }, []) 

  return (
    <>
      <Header />
      <div className= {style.body}>
        <Profile item = {userData}></Profile>
      </div>

      <div className={style.outerBox}>
        <p style={{fontSize: '1.5rem'}}>Wanna help us? Donate Us</p>
        <Button color="success" variant="contained">Donate</Button>
      </div>
    </>
  )
}

export default ProfilePage