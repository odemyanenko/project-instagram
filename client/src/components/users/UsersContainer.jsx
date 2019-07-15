import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followActionCreator, unFollowActionCreator, setUsersActionCreator} from "./../../reducers/users/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);