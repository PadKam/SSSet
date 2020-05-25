import {authMeThunkCreator} from "./auth-Reduser";

const SET_INITIALIZED = "SET_INITIALIZED";

export const initializedSuccess = () => ({type:SET_INITIALIZED})

let inicialState = {
    initialized:false
};

export const  initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunkCreator())
        promise.then( ()=>dispatch(initializedSuccess()) )

    }
}

const appReduser = (state = inicialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
    }
    return state;
}


export default appReduser;