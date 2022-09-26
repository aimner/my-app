import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import { Main } from './components/Main/Main';
import { BrowserRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux/es/exports";
import { authMeThunk, isAuthMeThunk } from './state/authReducer';
import { Preloader } from './components/Common/Preloader/Preloader';
import { AppStateType } from './state/redux-store';

type PropsType = MapStatePropsType & MapDispacthPropsType & OwnPropsType;

type MapStatePropsType = {
  meAuth: boolean
}

type MapDispacthPropsType = {
  isAuthMeThunk: () => void
  authMeThunk: (isAuth: boolean) => void
}

type OwnPropsType = {

}


class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.isAuthMeThunk()
  }

  render() {
    if(!this.props.meAuth) return <Preloader/>
    
    return (
      <BrowserRouter>
        <div className={`${classes.container}`}>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToPropse = (state: AppStateType) => {
  return {
    meAuth: state.auth.meAuth
  }
}

export default compose(
  connect<MapStatePropsType, MapDispacthPropsType, OwnPropsType, AppStateType>(mapStateToPropse, {
    authMeThunk,
    isAuthMeThunk
  }),
)(App);


