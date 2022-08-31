import React from "react";
import classes from "./Post.module.scss";

export const Post = (props) => {
  // debugger
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


