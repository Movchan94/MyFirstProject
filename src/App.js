import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/STATE";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path ='/dialogs'
                        render = {() => <Dialogs state ={props.state.dialogsPage}
                        addMessage = {props.addMessage}
                        />}/>
                    <Route exact path ='/profile'
                        render = {() => <Profile
                        profilePage ={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText = {props.updateNewPostText}
                        />}/>
                    <Route exact path ='/news'
                        render = {() => <News/>}/>
                    <Route exact path ='/music'
                        render = {() => <Music/>}/>
                    <Route exact path ='/settings'
                        render = {() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;