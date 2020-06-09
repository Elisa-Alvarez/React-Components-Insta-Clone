// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [postedComment, setComment]= useState(props.comments)
  console.log(postedComment)
   return (
    <div>
      {postedComment.map(comObj=>{
        return <Comment key={comObj.uername} comment= {comObj} />    })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
