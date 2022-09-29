import React, { useEffect } from "react";
import { User } from "./User/User";
import classes from "./Users.module.scss";
import { UserPagination } from "./UsersPagination/UserPagination";
import { Preloader } from "../../Common/Preloader/Preloader";
import { UserSearchForm } from "./UserSearchForm/UserSearchForm";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPageSelector,
  filterSelector,
  followIdSelector,
  totalCountSelector,
  usersCountSelector,
  usersSelector,
} from "../../../selectors/userSelectors";
import {
  followUserThunk,
  searchUsersThunk,
  userGetChangeCurrentPageThunk,
} from "../../../state/usersReducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../../../state/redux-store";
import { useNavigate, useSearchParams } from "react-router-dom";

type AppDispatch = ThunkDispatch<AppStateType, any, AnyAction>;

export const Users: React.FunctionComponent<{}> = () => {
  const preload = useSelector((state: AppStateType) => state.usersPage.preload);
  const users = useSelector(usersSelector);
  const totalCount = useSelector(totalCountSelector);
  const usersCount = useSelector(usersCountSelector);
  const currentPage = useSelector(currentPageSelector);
  const followId = useSelector(followIdSelector);
  const filter = useSelector(filterSelector);


  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!!filter.term) {
      // navigate(`/users?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`);
      setSearchParams({ term: filter.term, friend: filter.friend, page: String(currentPage) });
    } else {
      setSearchParams({ friend: filter.friend, page: String(currentPage) });
      // navigate(`/users?friend=${filter.friend}&page=${currentPage}`);
    }
  }, [filter.friend, filter.term, currentPage]);

  useEffect(() => {
      let number = searchParams.get("page") || 1;
      let term = searchParams.get("term") || '';
      let friend = searchParams.get("friend")!;
    if (!filter.friend && !filter.term) {
      dispatch(searchUsersThunk(+number, usersCount, term, friend));
    }
  }, []);

  const dispatch: AppDispatch = useDispatch();

  const followUser = (id: number) => dispatch(followUserThunk(id));
  const unFollowUser = (id: number) => dispatch(followUserThunk(id));

  const onChangeCurrentPage = (number: number) => {
    dispatch(userGetChangeCurrentPageThunk(number, usersCount));
  };

  const onSearchUsers = (term: string, friend: string) => {
    dispatch(searchUsersThunk(currentPage, usersCount, term, friend));
  };

  return (
    <section className={classes.section}>
      {preload ? (
        <Preloader />
      ) : (
        <UserPagination
          pageCount={totalCount / usersCount}
          currentPage={currentPage}
          onChangeCurrentPage={onChangeCurrentPage}
        />
      )}
      <UserSearchForm onSearchUsers={onSearchUsers} filter={filter} />
      {users.map((item) => (
        <User
          user={item}
          followId={followId}
          followUserThunk={followUser}
          unFollowUserThunk={unFollowUser}></User>
      ))}
    </section>
  );
};
