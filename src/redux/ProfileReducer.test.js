import profileReducer, {
    addPostActionCreator,
    deletePost
} from "./ProfileReducer";
import ReactDOM from "react-dom";
import React from "react";
import App from "../App";

let state = {
    posts: [
        {id: 'user_1', message: 'Hello world!', likesCount: '17'},
        {id: 'user_2', message: 'Hi all!', likesCount: '33'},
        {id: 'user_3', message: 'Hi!', likesCount: '3'}
    ]
}

it('profileReducer - new post should be added', () => {
    //1. Test data
    let action = addPostActionCreator('TEST-first')

    //2. Action
    let newState =  profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(4)

});
it('after deleting length of messages should be decrement', () => {
    //1. Test data
    let action = deletePost(1)

    //2. Action
    let newState =  profileReducer(state, action)

    //3. expectation
     expect(newState.posts.length).toBe(2)
});

