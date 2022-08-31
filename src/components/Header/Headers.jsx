import React from "react";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={classes.header__container}>
        <h1>Messenger</h1>
      </div>
    </header>
  );
};
