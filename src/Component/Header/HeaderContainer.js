import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../Redux/auth-Reduser";

class HeaderContainer extends React.Component {


    render() {
        return(
            <Header {...this.props} logOutThunkCreator={this.props.logOutThunkCreator}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login:state.auth.login,
        isAuth:state.auth.isAuth
    }
}

const HeaderComponent = connect(mapStateToProps, {
    logOutThunkCreator
})(HeaderContainer);

export default HeaderComponent

