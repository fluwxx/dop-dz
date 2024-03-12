// AddPostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from "./PostList";

function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            dispatch(addPost({ title }));
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPostForm;
