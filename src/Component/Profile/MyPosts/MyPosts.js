import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.postsDate.map(post => <Post message={post.post} licCount={post.lic} key = {post.id}/>);

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.newPost}>
                <div>
                    <textarea onChange={(e)=>props.updateNewPostTextActionCreator(e.target.value)} value={props.newPostText}/>
                </div>
                <div>
                    <button className={"buttonAddPost"} onClick={()=>props.addPostActionCreator()}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );

}


export default MyPosts;