import React from "react";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth-Reduser";
import {Redirect} from "react-router-dom";


const LoginComponent = (props) =>{

    const onSubmit = (formData) =>{
        props.loginThunkCreator(formData.email,formData.password,formData.rememberMy);
    }

    return (
        <div>
            <h1>Login</h1>
            {props.isAuth==true && <Redirect to={"/profile"}/>}
            <LoginReduxForm onSubmit={onSubmit} resultCode={props.resultCode} errorMessagess={props.errorMessagess}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    resultCode: state.auth.resultCode,
    errorMessagess: state.auth.messages
})

let LoginContainer = connect(mapStateToProps,{loginThunkCreator})(LoginComponent)

export default  LoginContainer