import React from "react";
import {connect} from "react-redux";
import {userFollowed,toggleFollowingInProgress,getUsersThunksCreator,toggleFollowThunkCreator} from "../../Redux/findUser-Reduser";
import FindUsers from "./FindUsers";
import PreoladerComp from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../Redux/users-Selectors";

class FindUsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunksCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunksCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreoladerComp/>: null}
                <FindUsers totalUserCount={this.props.totalUserCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           onPageChanged={this.onPageChanged}
                           userFollowed={this.props.userFollowed}
                           isFetching={this.props.isFetching}
                           followingInProgress={this.props.followingInProgress}
                           toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                           toggleFollowThunkCreator={this.props.toggleFollowThunkCreator}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersDate,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
/*let mapDispatchToProps = (dispatch) => {
    return {
        userFollowed: (userId) => dispatch(userFollowedAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalCountUser: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        toggleIsFetchingAC: (isFetching)=>dispatch(toggleIsFetchingAC(isFetching))
    }
}*/


const FindUsersContainer = connect(mapStateToProps, {
    toggleFollowingInProgress,
    userFollowed,
    getUsersThunksCreator,
    toggleFollowThunkCreator
})(FindUsersAPIComponent);

export default FindUsersContainer;