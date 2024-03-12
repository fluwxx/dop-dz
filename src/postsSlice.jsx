// postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://dummyjson.com/todos');
    return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
    const response = await axios.post('https://dummyjson.com/todos/add', postData);
    return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
    await axios.delete(`https://dummyjson.com/todos/${postId}`);
    return postId;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [addPost.fulfilled]: (state, action) => {
            state.posts.push(action.payload);
        },
        [deletePost.fulfilled]: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
    },
});

export default postsSlice.reducer;


