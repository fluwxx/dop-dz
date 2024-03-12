// store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostList.jsx';

export default configureStore({
    reducer: {
        posts: postsReducer,
    },
});
