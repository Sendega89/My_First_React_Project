import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPagesAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../../../redux/users_Reducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps=(dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId));
        } ,
        unfollow:(userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPagesAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
};




export default connect(mapStateToProps,mapDispatchToProps) (Users);


