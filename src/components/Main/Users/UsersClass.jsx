import React from "react";
import { User } from "./User/User";
import classes from "./Users.module.scss";
import * as axios from "axios";

export class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((value) => {
            // debugger
            console.log(1)
          props.setUsers(value.data.items);
        });
    }
// смысл использования в данном месте классовой компоненты вот в чем
// Реакт создаёт обьект 1 раз, и в след раз при изменении стейта обращается к созданному обьекту
// а не создаёт его каждый раз
    render() {
        // debugger
        return (
           
            <section className={classes.section}>
              {this.props.users.map((item) => (
                <User
                  user={item}
                  followUser={this.props.followUser}
                  unFollowUser={this.props.unFollowUser}
                ></User>
              ))}
            </section>
          )
    }
}