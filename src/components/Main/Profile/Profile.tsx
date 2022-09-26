import React from "react";
import classes from "./Profile.module.scss"
import Posts from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfoHook";
import { ProfileInputContainer } from "./ProfileInput/ProfileInput";
import { UserType } from "../../../types/usersReducerType";
import { PostType, ProfileType } from "../../../types/profileReducerTypes";

type PropsType = MapStatePropsType & MapDispacthPropsType

type MapStatePropsType = {
  posts: PostType[];
  authId: number
  profile: ProfileType
  status: string
}

type MapDispacthPropsType = {
  getProfileThunk: (id: number) => void
  getStatusThunk: (id: number) => void
  addNewPostText: (text: string) => void
  setStatusThunk: (status: string) => void
  changePhotoThunk: (file: File) => void
  changeProfileThunk: (profile: ProfileType) => void
}

export const Profile: React.FunctionComponent<PropsType> = (props) => {

  return (
    <section className={classes.section}>
      <div className={classes.section__profile}>
        <ProfileInfo profile={props.profile} status={props.status} setStatusThunk={props.setStatusThunk} authId={props.authId} changePhotoThunk={props.changePhotoThunk} changeProfileThunk={props.changeProfileThunk}/>
        <ProfileInputContainer addNewPostText={props.addNewPostText} />
        <Posts posts={props.posts}/>
      </div>
    </section>
  );
};
