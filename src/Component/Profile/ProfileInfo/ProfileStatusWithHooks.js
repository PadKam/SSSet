import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(true);
    let [textStatus,setTextStatus] = useState(props.status);

    useEffect(()=>{
        //if(editMode)
            setTextStatus(props.status)
    },[props.status])
    const activateEditMode = () => {
        if (props.userId == props.authUserId)
            setEditMode(false)
    }
    const deactivateEditMode = () => {
        props.updateStatusThunkCreate(textStatus);
        setEditMode(true)
    }
    const changeStatus = (e) => {
        setTextStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? (
                    <div>
                        <span onDoubleClick={activateEditMode}>Статус: {props.status}</span>
                    </div>
                )
                : (
                    <div>
                        <input onBlur={deactivateEditMode} onChange={changeStatus} value={textStatus} autoFocus={true}></input>
                    </div>
                )
            }
        </div>
    );
}

export default ProfileStatusWithHooks;