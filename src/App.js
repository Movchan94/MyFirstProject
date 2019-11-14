import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Component/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/REDUX-STORE";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render(){
    if (!this.props.initialized){
            return <Preloader />
        }
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path ='/dialogs'
                           render = {() => <DialogsContainer />}/>
                    <Route path ='/profile/:userId?'
                           render = {() => <ProfileContainer />}/>
                    <Route path ='/news'
                           render = {() => <News/>}/>
                    <Route path ='/music'
                           render = {() => <Music/>}/>
                    <Route path ='/settings'
                           render = {() => <Settings/>}/>
                    <Route path ='/users'
                           render = {() => <UsersContainer/>}/>
                    <Route path ='/login'
                           render = {() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const MainApp = (props) => {
return <BrowserRouter>
    <Provider store = {store}>
        < AppContainer />
        </Provider>
        </BrowserRouter>
}