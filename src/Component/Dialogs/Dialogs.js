import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, requiredField} from "../../Utils/Validators/validators";
import {Textarea} from "../Common/FormsControl/FormsControl";


const maxLength = maxLengthCreater(10);

const Dialogs = (props) => {
    let dialogElements = props.messagesPage.dialogsDate.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                           imgAvatarUrl={dialog.imgAvatarUrl} key = {dialog.id}/>);
    let messagesElements = props.messagesPage.messagesDate.map(message => <Message message={message.message}
                                                                            idUser={message.idUser}
                                                                            imgAvatarUrl={message.imgAvatarUrl} key = {message.id}/>);

    const onSubmit = (formData) =>{
        console.log(formData)
        props.addMessageActionCreator(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const MessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"message"} name={"message"} component={Textarea} validate ={[requiredField,maxLength]} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
        )
}

const MessageReduxForm = reduxForm({
    form:"dialogMessage"
})(MessageForm)

export default Dialogs;