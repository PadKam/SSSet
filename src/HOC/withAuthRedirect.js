import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsFoRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authUserId: state.auth.id
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {

            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>;
            }
            return <Component {...this.props}/>
        }
    }

    let ConnectedRiderectComponent = connect(mapStateToPropsFoRedirect)(RedirectComponent)

    return ConnectedRiderectComponent
}

export const withSuspenseHOC = (Component) => (props) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
    )
}