import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unfollow, toggleFollowingProgress
} from "../../../../redux/users_Reducer";

import Users from "./Users";
import Preloader from "../../../../common/Preloader/Preloader";
import {getUsers} from "../../../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPages(pageNumber)
        getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
               isFollowing={this.props.isFollowing}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
};




export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPages,setTotalUsersCount,toggleIsFetching,toggleFollowingProgress}) (UsersContainer);


