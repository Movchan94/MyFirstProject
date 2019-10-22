import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from '../../redux/UsersReducer';
import * as axios from "axios";
import Users from './Users';
import SpinnerPreloader from './Photo/SpinnerPreloader.gif'
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/API";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize );
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>:null }
            <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}



export default withAuthRedirect( connect(mapStateToProps,{
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer));