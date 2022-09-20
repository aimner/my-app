import React from "react";
import classes from "./Profile.module.scss"
import Posts from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfoHook";
import { ProfileInputContainer } from "./ProfileInput/ProfileInput";


export const Profile = (props) => {


  return (
    <section className={classes.section}>
      <div className={classes.section__profile}>
        <ProfileInfo profile={props.profile} status={props.status} setStatusThunk={props.setStatusThunk}/>
        <ProfileInputContainer newPost={props.newPost} addNewPostText={props.addNewPostText} />
        <Posts posts={props.posts}/>
      </div>
    </section>
  );
};
