const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 'user_1', message: 'Hello world!', likesCount: '17'},
        {id: 'user_2', message: 'Hi all!', likesCount: '33'}
    ],
    newPostText: 'reactjs'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 'user_5',
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer;