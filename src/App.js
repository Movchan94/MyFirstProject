import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Component/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/REDUX-STORE";
import {withSuspense} from "./HOC/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
   catchAllUnhandledErrors = (reason, promise) => {
        alert('Some error occured')
       // console.error(promiseRejectionEvent)
}
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
            <Switch>
                    <Route exact path  ='/'
                            render={()=> <Redirect to = {'/profile'}/>}/>

                    <Route path ='/dialogs'
                            render={withSuspense(DialogsContainer)}/>

                    <Route path ='/profile/:userId?'
                            render={withSuspense(ProfileContainer)}/>

                    <Route path ='/news'
                           render = {() => <News/>}/>

                    <Route path ='/music'
                           render = {() => <Music/>}/>

                    <Route path ='/settings'
                           render = {() => <Settings/>}/>

                    <Route path ='/users'
                            render = {withSuspense(UsersContainer)}/>

                    <Route path ='/login'
                           render = {() => <Login/>}/>

                    <Route path ='*'
                            render = {() =><div>404 NOT FOUND</div>}/>
            </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const MainApp = (props) => {
return <HashRouter>
        <Provider store = {store}>
            <AppContainer/>
            </Provider>
        </HashRouter>
}
// <HashRouter> use for Git Hub pages