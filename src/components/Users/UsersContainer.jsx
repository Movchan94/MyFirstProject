import React from 'react';
import connect from "react-redux/es/connect/connect";
import {
    followActionCreator, setCurrentPageAC, setUsersActionCreator, setUsersTotalCountAC,
    unFollowActionCreator
} from "../../redux/UsersReducer";
import Users from "./Users";


let mapStateToProps = (state)=>{
	return {
		users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage

	}
}
let mapDispatchToProps = (dispatch)=> {
	return {
		follow: (userID) => {
			dispatch(followActionCreator(userID));
		},
		unfollow: (userID) => {
			dispatch(unFollowActionCreator(userID));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		},
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
	}
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);