import React from "react";
import { connect } from "react-redux/es/exports";
import { Users } from "./Users";
import {
  userGetThunk,
  userGetChangeCurrentPageThunk,
  followUserThunk,
  unFollowUserThunk,
} from "./../../../state/usersReducer";
import { AuthHoc } from "./../../../hoc/AuthHoc";
import { compose } from "redux";
import {totalCountSelector, usersCountSelector, currentPageSelector, preloadSelector, followIdSelector, usersSelectorSuper } from './../../../selectors/userSelectors';


class UsersContainer extends React.Component {
  // если в конструкторе мы ничего не используем, то можно не писать его
  componentDidMount() {
    this.props.userGetThunk(this.props.currentPage, this.props.usersCount); // userGetThunk - это userGetThunk = (currentPage, usersCount) => dispatch(userGetThunk(currentPage, usersCount))
    // т.к. мы можем диспатчить только action(объект с обязательным свойством type), мы установили спец. библиотеку которая позволяет нам диспатчить функции

    // this.props.setPreload(true);
    // getUsers(this.props.currentPage, this.props.usersCount).then((value) => {
    //   this.props.setUsers(value.data.items);
    //   this.props.setTotalCount(value.data.totalCount);
    //   this.props.setPreload(false);
    // });
  } // метод вызывается после рендеринга компонента 

  onChangeCurrentPage = (number) => {
    this.props.userGetChangeCurrentPageThunk(number, this.props.usersCount);
    // this.props.setPreload(true);
    // getUsers(number, this.props.usersCount).then((value) => {
    //     this.props.setPreload(false);
    //     this.props.setUsers(value.data.items);
    //     this.props.setTotalCount(value.data.totalCount);
    //   });
    // this.props.changeCurrentPage(number);
  };
  // смысл использования в данном месте классовой компоненты вот в чем
  // Реакт создаёт обьект 1 раз, и в след раз при изменении стейта обращается к созданному обьекту
  // а не создаёт его каждый раз
  render() {
    return (
      <>
        <Users
          currentPage={this.props.currentPage}
          onChangeCurrentPage={this.onChangeCurrentPage}
          users={this.props.users}
          followId={this.props.followId}
          followUserThunk={this.props.followUserThunk}
          unFollowUserThunk={this.props.unFollowUserThunk}
          preload={this.props.preload}
          usersCount={this.props.usersCount}
          totalCount={this.props.totalCount}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

const mapStateToPropse = (state) => {
  return {
    users: usersSelectorSuper(state),
    totalCount: totalCountSelector(state),
    usersCount: usersCountSelector(state),
    currentPage: currentPageSelector(state),
    preload: preloadSelector(state),
    followId: followIdSelector(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     followUser: (id) => {
//       dispatch(followUser(id));
//     },
//     unFollowUser: (id) => {
//       dispatch(unFollowUser(id));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCount(totalCount));
//     },
//     changeCurrentPage: (currentPage) => {
//       dispatch(changeCurrentPage(currentPage));
//     },
//     setPreload: (preload) => {
//       dispatch(setPreload(preload));
//     },
//   };
// };

// Мы вместо функции mapDispatchToProps в connect можем сразу передать наши actionCreator, connect сам сделает коллбек функции на их основе

// export default connect(mapStateToPropse, mapDispatchToProps)(UsersContainer);

// export default connect(mapStateToPropse, {
//   userGetThunk,
//   userGetChangeCurrentPageThunk,
//   followUserThunk,
//   unFollowUserThunk
// })(AuthHoc(UsersContainer));

export default compose(
  connect(mapStateToPropse, {
    userGetThunk,
    userGetChangeCurrentPageThunk,
    followUserThunk,
    unFollowUserThunk,
  }),
  AuthHoc
)(UsersContainer);
