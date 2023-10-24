import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import "./Timeline.css";
import axios from "axios";

function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect( ()=>{
    const fetchData = async ()=>{
       const response = await axios.get('http://localhost:8080/posts');
       console.log('response', response.data);
       response.data.sort((x, y) => {
        return new Date(x.created) < new Date(y.created) ? 1 : -1
      })
      
      const newData = response.data.map((item)=> {
        const d = new Date(`${item.created}`);
        return {...item, created: `${d.toDateString()}`}
      })
      console.log('response', newData)
      setPosts([...posts,...newData])
    }
    fetchData();
  }, [])
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.username}
              postImage={post.urlImage}
              likes={post.likes}
              timestamp={post.created}
              setPosts={setPosts}
              posts={posts}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
      </div>
    </div>
  );
}

export default Timeline;
