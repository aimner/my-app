import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

export const Header = (props) => {
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
