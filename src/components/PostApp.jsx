import "../scss/PostApp.scss";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";
import PostItem from "./PostItem";

const PostApp = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state)=>state.post.posts)
  return (
    <div className="posts-main">
      <h2>3.Redux Toolkit Async Thunk</h2>
      <div className="post-btn">
        <button onClick={()=>dispatch(getPosts())} type="submit">GET POSTS</button>
      </div>
      <div className="posts">
        {
          posts?.map((post)=>(
            <PostItem key={post.title} post={post} />
          ))
        }
      </div>
    </div>
  );
};

export default PostApp;
