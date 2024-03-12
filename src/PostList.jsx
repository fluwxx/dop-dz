// PostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from './postsSlice.jsx';

function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                    <button onClick={() => dispatch(deletePost())}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default PostList;

export class addPost {}