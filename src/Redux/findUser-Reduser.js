import {userAPI} from "../API/API";

const FOLLOWED = "FOLLOWED";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export const userFollowed = (id) => ({type: FOLLOWED, userId: id});
export const setUsers = (users) => ({type: SET_USERS, usersDate: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalCountUser = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount: totalUserCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingInProgress = (id, count) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userId: id, count: count})

export const getUsersThunksCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items));
    dispatch(setTotalCountUser(response.totalCount));
    dispatch(toggleIsFetching(false));
}

export const toggleFollowThunkCreator = (userId, stateFollow) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true));
    let response = null;
    if (stateFollow == false)
        response = await userAPI.getFollow(userId);
    else
        response = await userAPI.getUnFollow(userId);

    dispatch(toggleFollowingInProgress(userId, false));
    return !response ? dispatch(userFollowed(userId)) : '';
}


let inicialState = {
    usersDate: [],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};


const findUsersReducer = (state = inicialState, action) => {

    switch (action.type) {
        case FOLLOWED:
            return userFollowedM(state, action.userId);
        case SET_USERS:
            return {...state, usersDate: action.usersDate}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return toggleFollowingInProgressF(state, action.userId, action.count)
    }

    return state;
}


let userFollowedM = (state, userId) => {

    let stateCopy = {
        ...state,
        usersDate: state.usersDate.map((e) => {
            if (e.id == userId) {
                return {...e, followed: !e.followed}
            }
            return e;
        })
    };
    return stateCopy;
};

let toggleFollowingInProgressF = (state, userId, count) => {

    let stateCopy = {}
    if (count) {
        stateCopy = {...state, followingInProgress: [...state.followingInProgress, userId]}

    } else {
        stateCopy = {...state, followingInProgress: [state.followingInProgress.filter((id) => id != userId)]}

    }
    return stateCopy;
};


export default findUsersReducer;