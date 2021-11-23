import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsName.module.css";






const DialogsName = (props) => {
  let path = "/message/" + props.id;

  return (
      <NavLink className={classes.dialogsName} activeClassName={classes.active} to={path}>{props.name}</NavLink>
  )
}

export default DialogsName