import {profileAPI, usersAPI} from "../API/API";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 'user_1', message: 'Hello world!', likesCount: '17'},
        {id: 'user_2', message: 'Hi all!', likesCount: '33'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 'user_5',
                message: action.NewPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile:action.profile

            };
        case SET_STATUS:
            return {
                ...state, status:action.status

            };
        default:
            return state;
    }

}
export const addPostActionCreator = (NewPostBody) => ({
    type: ADD_POST, NewPostBody
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const getUserProfile = (userId) => (dispatch)=> {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch)=> {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch)=> {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}


export default profileReducer;