import React from 'react';
import connect from "react-redux/es/connect/connect";
import {
	followActionCreator, setUsersActionCreator,
	unFollowActionCreator
} from "../../redux/UsersReducer";
import Users from "./Users";


let mapStateToProps = (state)=>{
	return {
		users:state.usersPage.users

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
		}
	}
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);