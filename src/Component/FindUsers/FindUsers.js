import React from "react";
import s from './FindUsers.module.css'
import userIcon from "../../assets/images/userIcon.png"
import {NavLink} from "react-router-dom";
import {userAPI} from "../../API/API";

let FindUsers = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize);
    let pages = [];
    let firstPage = (props.currentPage-3) < 1 ? 1 : (pagesCount - (props.currentPage-3)) < 7 ? pagesCount - 7 : props.currentPage-3;
    let endPage = (props.currentPage+3) > pagesCount ? pagesCount : (props.currentPage+3) < 7 ? 7 : props.currentPage+3;

    for(let i = firstPage; i <= endPage; i++){
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => <button className={p == props.currentPage ? s.selectPage : ""}
                                        onClick={() => {props.onPageChanged(p)}}>{p}</button>)}
            </div>

            {props.users.map((e) => {
                    return (
            <div key={e.id}>
                <span>
                    <div>
                        <NavLink to = {'/profile/' + e.id}>
                            <img src={e.photos.small != null ? e.photos.small : userIcon}/>
                        </NavLink>
                    </div>
                    <div>
                        <button
                        onClick={() => props.toggleFollowThunkCreator(e.id,e.followed)}
                            disabled={props.followingInProgress.some((elem)=>elem==e.id)}
                        >{e.followed ? 'followed' : 'unfollowed'}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{e.name}</div>
                        <div>{e.status}</div>
                    </span>
                    <span>
                        <div>{'e.location.country '}</div>
                        <div>{'e.location.city '}</div>
                    </span>
                </span>
            </div>
                )}
            )}
        </div>
    )

}

export default FindUsers