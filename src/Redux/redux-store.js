import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";

import profileReducer from "./profile-Reducer";
import messagesReducer from "./messages-Reducer";
import sidebarReducer from "./sidebar-Reducer";
import findUsersReducer from "./findUser-Reduser";
import authReduser from "./auth-Reduser";
import thunkMiddleware from "redux-thunk"
import appReduser from "./app-Reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: findUsersReducer,
    auth: authReduser,
    form: formReducer,
    app:appReduser
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
