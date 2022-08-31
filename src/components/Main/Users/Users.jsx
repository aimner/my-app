import React from "react";
import { User } from "./User/User";
import classes from "./Users.module.scss";
import * as axios from "axios";

export const Users = (props) => {
  console.log(props);
  if (!props.users) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((value) => {
        console.log(value);
        props.setUsers(value.data.items);
      });
  }

  return (
    <section className={classes.section}>
      {props.users.map((item) => (
        <User
          user={item}
          followUser={props.followUser}
          unFollowUser={props.unFollowUser}
        ></User>
      ))}
    </section>
  );
};
