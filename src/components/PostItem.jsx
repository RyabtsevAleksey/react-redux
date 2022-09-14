import React from "react";
import '../scss/PostItem.scss'
import { deletePostsById } from "../redux/postSlice";
import { useDispatch } from "react-redux";

const PostItem = ({post}) => {
  const dispatch = useDispatch();

  return (
    <div 
    onClick={()=>dispatch(deletePostsById(post.id))}
    className="post">
      {post.title}
    </div>
  )
}

export default PostItem
