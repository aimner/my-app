import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux/es/exports";
import { logoutThunk } from './../../state/authReducer';
import { compose } from "redux";
import { AppStateType } from "../../state/redux-store";

type MapStatePropsType = {
  login: string | null
  email: string | null
  isAuth: boolean
}

type MapDispacthPropsType = {
  logoutThunk: () => void
}


class HeaderContainer extends React.Component<MapStatePropsType & MapDispacthPropsType> {


  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, {logoutThunk}))(HeaderContainer)

// export default connect(mapStateToProps, { authMeThunk })(HeaderContainer);

