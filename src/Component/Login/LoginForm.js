import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/> remember me
            </div>
            <div>
                <button name={"buttonLogin"}>Login</button>
            </div>
            {props.resultCode == 1 &&
            <div>
                {props.errorMessagess.map(el => <div>{el}</div>)}
            </div>
            }
            <div>{props.error}</div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

export default LoginReduxForm