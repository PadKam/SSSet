import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/media/D8r-PBWWsAEXTfK.jpg'></img>
            {props.message}
            <div>
                <span>Like {props.licCount}</span>
                <span>DisLike</span>
            </div>
        </div>
    );
}

export default Post;