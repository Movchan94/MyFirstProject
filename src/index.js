
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/STATE";
import {addPost,updateNewPostText,addMessage, updateNewMessageText } from "./redux/STATE";
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let renenderEntireTree = (state) =>{

    ReactDOM.render(<App state ={state}
    addPost={addPost}
    updateNewPostText = {updateNewPostText}
    addMessage = {addMessage}
    updateNewMessageText = {updateNewMessageText}
    />
        , document.getElementById('root'));

}

renenderEntireTree (state);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
