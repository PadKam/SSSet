import React from "react";
import s from "./ProfileInfo.module.css"
import space from './../../../assets/images/space.png'
import PreoladerComp from "../../Common/Preloader/Preloader";
import userIcon from './../../../assets/images/userIcon.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreoladerComp/>
    }
    return (
        <div>
            <div className={s.imgHeader}>
                <img src={space}></img>
            </div>
            <div className={s.discriptionBlock}>
                <div className={s.imgUser}>
                    <img src={props.profile.photos.small ? props.profile.photos.small : userIcon}></img>
                </div>
                <div>
                    <ProfileStatusWithHooks userId={props.profile.userId}
                                            authUserId={props.authUserId}
                                            status={props.status}
                                            updateStatusThunkCreate={props.updateStatusThunkCreate}/>
                </div>
                <div className={s.profileUser}>
                    <div>Меня зовут: {props.profile.fullName}</div>
                    <div>Обомне: {props.profile.aboutMe}</div>
                    <div>Работа: {props.profile.lookingForAJobDescription}</div>
                    <div>Контакты:</div>
                    <div>vk: {props.profile.vk}</div>
                    <div>facebook: {props.profile.facebook}</div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;