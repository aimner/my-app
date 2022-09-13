// import React from "react";
// import { User } from "./User/User";
// import classes from "./Users.module.scss";
// import * as axios from "axios";
// import { UserPagination } from "./UsersPagination/UserPagination";


// class UsersClass extends React.Component {
//   // если в конструкторе мы ничего не используем, то можно не писать его
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`
//       )
//       .then((value) => {
//         this.props.setUsers(value.data.items);
//         this.props.setTotalCount(value.data.totalCount);
//       });
//   } // метод вызывается после рендеринга компонента


//   // смысл использования в данном месте классовой компоненты вот в чем
//   // Реакт создаёт обьект 1 раз, и в след раз при изменении стейта обращается к созданному обьекту
//   // а не создаёт его каждый раз
//   render() {
//     return (
//       <section className={classes.section}>
//         <UserPagination
//           pageCount={this.props.totalCount / this.props.usersCount}
//           currentPage={this.props.currentPage}
//           changeCurrentPage={this.props.changeCurrentPage}
//           setUsers = {this.props.setUsers}
//           setTotalCount = {this.props.setTotalCount}
//           usersCount = {this.props.usersCount}
//         />
//         {}
//         {this.props.users.map((item) => (
//           <User
//             user={item}
//             followUser={this.props.followUser}
//             unFollowUser={this.props.unFollowUser}
//           ></User>
//         ))}
//       </section>
//     );
//   }
// }
