import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    unfollow,requestUsers
} from "../../../../redux/users_Reducer";

import Users from "./Users";
import Preloader from "../../../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        getPageSize: state.usersPage.getPageSize,
        getTotalUsersCount: state.usersPage.getTotalUsersCount,
        getCurrentPage: state.usersPage.getCurrentPage,
        getIsFetching: state.usersPage.getIsFetching,
        getFollowingInProgress: state.usersPage.getFollowingInProgress
    }
};*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPages, requestUsers
    }),
    withAuthRedirect
)(UsersContainer);
