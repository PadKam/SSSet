import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.user}>
            <ProfileInfo profile = {props.profile}
                         authUserId = {props.authUserId}
                         status = {props.status}
                         updateStatusThunkCreate = {props.updateStatusThunkCreate}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;