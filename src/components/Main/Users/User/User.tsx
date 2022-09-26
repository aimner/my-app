import React from "react";
import classes from "./User.module.scss";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../../types/usersReducerType";

type PropsType = {
  user: UserType;
  unFollowUserThunk: (id: number) => void;
  followUserThunk: (id: number) => void;
  followId: number[]
}

export const User: React.FunctionComponent<PropsType> = (props) => {
  const onUnFollowUser = () => {
    props.unFollowUserThunk(props.user.id);
  };

  const onFollowUser = () => {
    props.followUserThunk(props.user.id);
  };

  return (
    <div>
      <NavLink to={`/profile/${props.user.id}`}>
        <img
          src={
            props.user.photos.small
              ? props.user.photos.small
              : "https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1"
          }
          alt="avatar"
          className={classes.avatar}
        />
      </NavLink>
      <div>{props.user.name}</div>
      <div>status</div>
      <div>{props.user.id}</div>
      {!!props.user.followed ? (
        <button
          onClick={() => onUnFollowUser()}
          disabled={props.followId.some((id) => id === props.user.id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => onFollowUser()}
          disabled={props.followId.some((id) => id === props.user.id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};
