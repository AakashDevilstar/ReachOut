import React from 'react'
import Profile from '../Components/Profile'
import style from "./MyProfilePage.module.css"
import Header from '../Components/Header'
import { useContext, useState, useEffect } from 'react'
import AppContext from '../App/App-Context'
import AddPost from '../Components/Post/AddPost'
import Post from '../Components/Post/Post'

function MyProfilePage() {
  
  const values = useContext(AppContext);

  const [postList, setPostList] = useState([]);

  let arr = [];
  
  const getMyPosts = async () => {

    try {
      const url = `https://reachout-9b1e7-default-rtdb.firebaseio.com/Posts.json?orderBy="userId"&equalTo=${values.myProfile.userId}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      for(let obj in data) {
        arr.push(data[obj]);
      }

      const list = arr.map(obj => {
        return <Post item = {obj} />
      })

      list.reverse();

      setPostList(list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMyPosts();
  }, [])

  return (
    <>
      <Header />
      <div className= {style.body}>
        <Profile item = {values.myProfile}></Profile>
      </div>

      <div className={style.outerBox}>
        <AddPost />
        <div>
          <div className={style.myPosts}><h4>My Posts</h4></div>
          {postList}
        </div>
      </div>
    </>
  )
}

export default MyProfilePage