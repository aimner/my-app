import React from "react";
import {
  newPostAction,
  newPostChangeAction,
} from "../../../redux/Postsreducer";
import StoreContext from "../../../redux/StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  // debugger;
  // let state = props.store.getState();

  // let addNewPost = () => {
  //   props.store.dispatch(newPostAction());
  // };

  // let updatePost = (text) => {
  //   props.store.dispatch(newPostChangeAction(text));
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addNewPost = () => {
          store.dispatch(newPostAction());
        };

        let updatePost = (text) => {
          store.dispatch(newPostChangeAction(text));
        };

        return <MyPosts updateNewPostText={updatePost} addNewPostText={addNewPost} profilePage={state.profilePage.posts} firstPost={state.profilePage.firstPost} />
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
