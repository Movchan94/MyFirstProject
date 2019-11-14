import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    profilePage :profileReducer,
    dialogsPage :dialogsReducer,
    sidebar     :sidebarReducer,
    usersPage   :usersReducer,
    auth        :AuthReducer,
    form        :formReducer,
    app         :AppReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));



window.store = store;

export default store;
