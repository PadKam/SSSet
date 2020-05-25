import {userAPI} from "../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_USER = 'SET_STATUS_USER';
const UPDATE_NEW_STATUS_USER = 'UPDATE_NEW_STATUS_USER'
const DELETE_POST = "DELETE_POST"

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatusProfile = (status) => ({type: SET_STATUS_USER, status: status});
export const updateNewStatusUser = (status) => ({type: UPDATE_NEW_STATUS_USER, status: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId});

export const getProfileThunkCreate = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    return dispatch(setUserProfile(response))
}

export const getStatusThunkCreate = (userId) => async (dispatch) => {
    let response = await userAPI.getStatus(userId)
    return dispatch(setStatusProfile(response))
}

export const updateStatusThunkCreate = (newStatus) => async (dispatch) => {
    let response = await userAPI.putNewAuthUserStatus(newStatus)
    return dispatch(updateNewStatusUser(newStatus))
}

let inicialState = {
    postsDate: [
        {id: 1, post: "Hi, how are you?", lic: 15},
        {id: 2, post: "It's my first post", lic: 20},
        {id: 3, post: "Post from data", lic: 0},
        {id: 4, post: "Forwarding posts ", lic: 25}
    ],
    newPostText: "",
    profile: null,
    status: null
};

const profileReducer = (state = inicialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return addPost(state);
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            return updateNewPostText(state, action.newText);
            break;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS_USER: {
            return {...state, status: action.status}
        }
        case UPDATE_NEW_STATUS_USER: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, postsDate: state.postsDate.filter(p => p.id != action.postId)}
        }
    }
    return state;
}

let addPost = (state) => {
    let stateCopy = {...state};
    stateCopy.postsDate = [...state.postsDate];
    stateCopy.postsDate.push({
        id: stateCopy.postsDate.length + 1,
        post: stateCopy.newPostText,
        lic: 0
    });
    stateCopy.newPostText = "";
    return stateCopy;
};

let updateNewPostText = (state, text) => {
    let stateCopy = {...state};
    if (text != undefined) {
        stateCopy.newPostText = text;
    } else
        console.log("text = undefined");
    return stateCopy;
};

export default profileReducer;