import React from "react";
import { User } from "./User/User";
import classes from "./Users.module.scss";
import { UserPagination } from "./UsersPagination/UserPagination";
import { Preloader } from '../../Common/Preloader/Preloader';
import { UserType } from "../../../types/usersReducerType";

type PropsType = {
  totalCount: number
  usersCount: number
  currentPage: number
  onChangeCurrentPage: (number: number) => void
  preload: boolean
  users: UserType[]
  followId: number[]
  followUserThunk: (id: number) => void;
  unFollowUserThunk:(id: number) => void
};




export const Users: React.FunctionComponent<PropsType> = (props) => {

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
