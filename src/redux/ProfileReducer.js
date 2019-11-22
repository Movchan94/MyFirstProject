import {profileAPI, usersAPI} from "../API/API";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCSESS = 'SAVE_PHOTO_SUCSESS';

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
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile

            };
        case SET_STATUS:
            return {
                ...state, status: action.status

            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)

            };
        case SAVE_PHOTO_SUCSESS:
            return {...state, profile:{...state.profile, photos:action.photos}};
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
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
})
export const savePhotoAC = (photos) => ({
    type: SAVE_PHOTO_SUCSESS, photos
})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.data.photos));
    }
}
export default profileReducer;