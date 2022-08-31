import React from "react";
import { Profile } from "./Profile";
import {
  addNewPostActionCreator,
  updateNewPostActionCreator,
} from "../../../state/profileReducer";


import { connect } from "react-redux/es/exports";

// export const ProfileContainer = (props) => {

//   // let newPostText = props.store.getState().profilePage.newPost;

//   // let addNewPostText = () => {
//   //   props.store.dispatch(addNewPostActionCreator());
//   // };

//   // let changePostText = (text) => {
//   //   props.store.dispatch(updateNewPostActionCreator(text));
//   // };

//   // let posts = props.store.getState().profilePage.posts;

//   return (
//     <MyContext.Consumer>
//       {(store) => {
//           let newPostText = store.getState().profilePage.newPost;

//           let addNewPostText = () => {
//             store.dispatch(addNewPostActionCreator());
//           };
        
//           let changePostText = (text) => {
//             store.dispatch(updateNewPostActionCreator(text));
//           };
        
//           let posts = store.getState().profilePage.posts;
//         return (
//           <Profile
//             newPost={newPostText}
//             addNewPostText={addNewPostText}
//             changePostText={changePostText}
//             posts={posts}
//           ></Profile>
//         );
//       }}
//     </MyContext.Consumer>
//   );
// };

let mapStateToPropse = (state) => {
  return {
    newPost: state.profilePage.newPost,
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPostText: () => {
      dispatch(addNewPostActionCreator())
    },
    changePostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    }
  }
}


export const ProfileContainer = connect(mapStateToPropse, mapDispatchToProps)(Profile)