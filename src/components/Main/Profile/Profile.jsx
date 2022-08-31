import React from "react";
import classes from "./Profile.module.scss"
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileInput } from "./ProfileInput/ProfileInput";

export const Profile = (props) => {
  return (
    <section className={classes.section}>
      <div className={classes.section__profile}>
        <ProfileInfo />
        <ProfileInput newPost={props.newPost} addNewPostText={props.addNewPostText} changePostText={props.changePostText}/>
        <Posts posts={props.posts}/>
      </div>
    </section>
  );
};
