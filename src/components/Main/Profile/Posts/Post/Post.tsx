import React from "react";
import { PostType } from "../../../../../types/profileReducerTypes";
import classes from "./Post.module.scss";

type PropsType = {
  postInfo: PostType;
}

export const Post: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/85486375?v=4"
        alt="avatar"
        className={classes.avatar}
      />
      <div>{props.postInfo.user}</div>
      <div>{props.postInfo.text}</div>
    </div>
  );
};


