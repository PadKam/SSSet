import React from "react";
import s from "./Message.module.css"

const Message = (props) => {
    return(
        <div className={`${s.message} ${props.idUser == 1 ? s.iKing : s.Holop}`}>
            <img src={props.imgAvatarUrl}></img>
            {props.message}
        </div>
    );
}
export default Message;