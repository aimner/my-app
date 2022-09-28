import React from "react";
import { Profile } from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import {
  getProfileThunk,
  getStatusThunk,
  setStatusThunk,
  changePhotoThunk,
  changeProfileThunk,
  actionsProfileReducer,
} from "./../../../state/profileReducer";
import { AuthHoc } from "../../../hoc/AuthHoc";
import { compose } from "redux";
import { AppStateType } from "../../../state/redux-store";
import { UserType } from "../../../types/usersReducerType";
import { PostType, ProfileType } from "../../../types/profileReducerTypes";

let addNewPostText = actionsProfileReducer.addNewPostText;

type PropsType = MapStatePropsType & MapDispacthPropsType & OwnPropsType;

type MapStatePropsType = {
  posts: PostType[];
  authId: number;
  profile: ProfileType;
  status: string;
};

type MapDispacthPropsType = {
  getProfileThunk: (id: number) => void;
  getStatusThunk: (id: number) => void;
  addNewPostText: (text: string) => void;
  setStatusThunk: (status: string) => void;
  changePhotoThunk: (file: File) => void;
  changeProfileThunk: (profile: ProfileType) => void;
};

type OwnPropsType = {
  router: any;
};

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId || this.props.authId;
    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  } // метод вызывается после рендеринга компонента

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.router.params?.userId !== prevProps.router.params?.userId) {
      let userId = this.props.router.params.userId || this.props.authId;
      this.props.getProfileThunk(userId);
      this.props.getStatusThunk(userId);
    }
  } // метод выполняется после обновления пропсов или стейта

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

let mapStateToPropse = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.id,
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
    setStatusThunk,
    changePhotoThunk,
    changeProfileThunk,
  }),
  withRouter,
  AuthHoc
)(ProfileContainer) as React.FunctionComponent;
// данная функция делает вызов функций одну за одной начиная с ProfileContainer и заканчивая connect

function withRouter(Component: React.FunctionComponent) {
  function ComponentWithRouterProp(props: any) {
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
