import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage :profileReducer,
    dialogsPage :dialogsReducer,
    sidebar     :sidebarReducer,
    usersPage   :usersReducer,
    auth        :AuthReducer,
    form        :formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
