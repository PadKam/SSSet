import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.usersDate;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const getUsersSuperSelector = createSelector(getUsers,getIsFetching,(users,isfething)=>{
    return users.filter(u=>true)
})