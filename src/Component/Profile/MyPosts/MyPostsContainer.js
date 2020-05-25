import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps= (state) =>{
    return{
        postsDate: state.profilePage.postsDate,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostActionCreator: () => {dispatch(addPostActionCreator())},
        updateNewPostTextActionCreator: (text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;