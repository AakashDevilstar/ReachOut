import React from 'react'
import styles from './Feed.module.css'
import Post from '../Components/Post/Post'
import MiniProfile from '../Components/MiniProfile'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'
import AddPost from '../Components/Post/AddPost'

function Feed() {

    const [postList, setPostList] = useState([]);

    let arr = [];

    const loadPosts = async () => {
      try {
        const url = 'https://reachout-9b1e7-default-rtdb.firebaseio.com/Posts.json'

        const response = await fetch(url);

        const data = await response.json();

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
      loadPosts();
    }, [])
    

  return (
      <>
        <Header />
        
        <div className = {styles.layout}>
            <MiniProfile />
            <div>
                <AddPost />
                {postList}
            </div>
            <Footer />
        </div>
      </>
  )
}

export default Feed