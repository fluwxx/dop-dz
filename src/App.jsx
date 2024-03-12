import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './PostList';
import AddPostForm from './AddPostForm';

function App() {
    return (
        <Provider store={store}>
            <div>
                <h1>Post List</h1>
                <AddPostForm />
                <PostList />
            </div>
        </Provider>
    );
}

export default App;
