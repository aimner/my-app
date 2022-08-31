import React from "react";
// import classes from "./User.module.scss"

export const User = (props) => {
    const onUnFollowUser = () => {
        props.unFollowUser(props.user.id)
    }

    const onFollowUser = () => {
        props.followUser(props.user.id)
    }

    return (
        <div>
            {/* <img src={props.user.avatar} alt="avatar" className={classes.avatar}/> */}
            <div>{props.user.name}</div>
            <div>status</div>
            {/* <div>{props.user.city}</div>
            <div>{props.user.country}</div> */}
            <div>{props.user.id}</div>
            {!!props.user.follow ? <button onClick={onUnFollowUser}>Unfollow</button> : <button onClick={onFollowUser}>Follow</button>}
        </div>
    )
}