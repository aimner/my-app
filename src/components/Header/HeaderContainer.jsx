import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux/es/exports";
import { authMeThunk, logoutThunk } from './../../state/authReducer';
import { compose } from "redux";




class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunk()
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, { authMeThunk, logoutThunk }))(HeaderContainer)

// export default connect(mapStateToProps, { authMeThunk })(HeaderContainer);

