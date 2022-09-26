import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

type MapStatePropsType = {
  login: string | null
  email: string | null
  isAuth: boolean
}

type MapDispacthPropsType = {
  logoutThunk: () => void
}


export const Header: React.FunctionComponent<MapStatePropsType & MapDispacthPropsType> = (props) => {
  const logout = () => {
    props.logoutThunk()
  }

  return (
    <header>
      <div className={classes.header__container}>
        <h1>Messenger</h1>
        {props.isAuth ? <button onClick={logout}>Logout</button> : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};
