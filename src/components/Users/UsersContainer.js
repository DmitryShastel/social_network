import React from "react";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./UsesrsC";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totaCount) => {
            dispatch(setUsersTotalCountAC(totaCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
