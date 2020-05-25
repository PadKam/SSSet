import {userAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOG_OUT_USER = "SET_LOG_OUT_USER"

export const setUserData = (usersDate, isAuth) => ({type: SET_USER_DATA, usersDate: usersDate, isAuth: isAuth});
export const setLogOutUser = (usersDate) => ({type: SET_LOG_OUT_USER, usersDate: usersDate});

export const authMeThunkCreator = () => async (dispatch) => {
    let response = await userAPI.authMe()
    if (response.resultCode == 0)
        dispatch(setUserData(response.data), true);
}

export const loginThunkCreator = (email, password, rememberMy) => async (dispatch) => {

    /*       let action = stopSubmit("login",{
               email:"Error email",
               _error: "error",
               password:"error password"
           })

           dispatch(action)
   return*/

    let response = await userAPI.authLogin(email, password, rememberMy)
    dispatch(setLogOutUser(response))
    dispatch(authMeThunkCreator())

}


export const logOutThunkCreator = () => async (dispatch) => {
    let response = await userAPI.authUnLogin()
    dispatch(setLogOutUser(response))
}

let inicialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    resultCode: false,
    messages: []
};


const authReduser = (state = inicialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.usersDate, isAuth: true}
        case SET_LOG_OUT_USER:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
                resultCode: action.usersDate.data.resultCode,
                messages: action.usersDate.data.messages
            }
    }
    return state;
}


export default authReduser;