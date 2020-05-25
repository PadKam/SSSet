import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatus = (props) => {
    return (
        <div className={s.profileUser}>
            <div>
                {props.state.editMode
                    ? <input autoFocus={true} onBlur={props.deactivateEditMode} onChange={(e) => {
                        props.changeStatus(e.target.value)
                    }} value={props.state.tempStatus}/>
                    : <span onDoubleClick={props.activateEditMode}>Статус: {props.state.status}</span>
                }
            </div>
        </div>
    );

}

export default ProfileStatus;