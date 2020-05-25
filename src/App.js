import React from 'react';
import './App.css';

import HeaderComponent from "./Component/Header/HeaderContainer.js";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";
import Friends from "./Component/Friends/Friends";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import NavContainer from "./Component/Nav/NavContainer";
import FindUsersContainer from "./Component/FindUsers/FindUsersContainer";
import LoginContainer from "./Component/Login/Login";
import Games from "./Component/Games/Game";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/app-Reduser";
import PreoladerComp from "./Component/Common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspenseHOC} from "./HOC/withAuthRedirect";


const DialogsContainer = React.lazy(() => import("./Component/Dialogs/DialogsContainer"))
const FindUserProfile = React.lazy(() => import("./Component/Profile/ProfileContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (this.props.initialized == false)
            return <PreoladerComp/>
        return (
            <div className={'app-wrapper'}>
                <HeaderComponent/>
                <NavContainer/>
                <div className={'app-wrapper__content'}>
                    <Route path={'/profile/:userId?'} render={withSuspenseHOC(FindUserProfile)}/>
                    <Route path={"/dialogs"} render={withSuspenseHOC(DialogsContainer)}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/friends"} render={() => <Friends/>}/>
                    <Route path={"/findusers"} render={() => <FindUsersContainer/>}/>
                    <Route path={"/login"} render={() => <LoginContainer/>}/>
                    <Route path={"/games"} render={() => <Games/>}/>
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
const AppCla = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App)

export let TestApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppCla/>
            </Provider>
        </BrowserRouter>
    );
}

export default AppCla;

