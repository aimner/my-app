import React from "react";
import { User } from "./User/User";
import classes from "./Users.module.scss";
import { UserPagination } from "./UsersPagination/UserPagination";
import { Preloader } from './../../Common/Preloader/Preloader';

export const Users = (props) => {

  return (
    <section className={classes.section}>
      {props.preload ? <Preloader/> :       
      (<UserPagination
        pageCount={props.totalCount / props.usersCount}
        currentPage={props.currentPage}
        onChangeCurrentPage={props.onChangeCurrentPage}
      />
      )
      }
      {props.users.map((item) => (
        <User
          user={item}
          followId = {props.followId}
          followUserThunk = {props.followUserThunk}
          unFollowUserThunk = {props.unFollowUserThunk}
        ></User>
      ))}
      
    </section>
  );
};
