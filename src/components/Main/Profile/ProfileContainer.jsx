import React from "react";
import { Profile } from "./Profile";
import { addNewPostText} from "../../../state/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import { getProfileThunk, getStatusThunk, setStatusThunk } from "./../../../state/profileReducer";
import { AuthHoc } from "./../../../hoc/AuthHoc";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || 25530;

    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId)
    // this.props.setStatusThunk('HELLO WORLD!')

  } // метод вызывается после рендеринга компонента

  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    );
  }
}

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
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addNewPostText: () => {
//       dispatch(addNewPostText());
//     },
//     changePostText: (text) => {
//       dispatch(changePostText(text));
//     },
//     setProfile: (profile) => {
//       dispatch(setProfile(profile));
//     },
//   };
// };

export default compose(
  connect(mapStateToPropse, {
    addNewPostText,
    getProfileThunk,
    getStatusThunk,
    setStatusThunk
  }),
  withRouter,
  AuthHoc
)(ProfileContainer);
// данная функция делает вызов функций одну за одной начиная с ProfileContainer и заканчивая connect

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

// let ProfileContainerWithRouter = withRouter(AuthHoc(ProfileContainer)); // возвращает нам новую компоненту, в пропсы прокидывая ей данные по URL(уже не работает, нужны хуки)

// // Мы вместо функции mapDispatchToProps в connect можем сразу передать наши actionCreator, connect сам сделает коллбек функции на их основе

// export default connect(mapStateToPropse, {
//   addNewPostText,
//   changePostText,
//   getProfileThunk,
// })(ProfileContainerWithRouter);

