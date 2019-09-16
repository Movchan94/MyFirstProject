import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    addMessage,
    addPost,
    updateNewPost,
    updateNewPostText
} from "./redux/STATE";



export let renenderEntireTree = (state) =>{

ReactDOM.render(<App state ={state}
    addPost={addPost}
    updateNewPostText = {updateNewPostText}
    addMessage = {addMessage}
    />
    , document.getElementById('root'));

}

