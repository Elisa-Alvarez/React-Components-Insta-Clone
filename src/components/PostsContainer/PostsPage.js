//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data"

console.log(data)
const PostsPage = () => {
  // set up state for your data
  const [postArray, setPostArray] = useState(data)
  return (
    <div className="posts-container-wrapper">
      { postArray.map(postObj=>{
        return <Post key={postObj.username} post= {postObj}   ></Post>    })}
    </div>
  );
};

export default PostsPage;
