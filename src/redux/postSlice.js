import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

// функция получения постов
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(setPosts(res.data));
  }
);

// функция удаления постов
export const deletePostsById = createAsyncThunk(
  "posts/deletePostsById",
  async (id, { rejectWithValue, dispatch }) => {
     await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
     dispatch(deletePost(id))
  }
);


export const postSlice = createSlice({
  name: "posts", // название может быть любым
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post)=>post.id !== action.payload)
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log("getPosts:fulfilled"),
    [getPosts.pending]: () => console.log("getPosts:pending"),
    [getPosts.rejected]: () => console.log("getPosts:rejected"),
    [deletePostsById.fulfilled]: () => console.log("deletePostsById:fulfilled"),
    [deletePostsById.pending]: () => console.log("deletePostsById:pending"),
    [deletePostsById.rejected]: () => console.log("deletePostsById:rejected"),
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
