import { getUsers, unFollowUserApi, followUserApi } from "../api";
import { InitialStateType, ThunkType, UserType } from "../types/usersReducerType";
import { ActionType } from "./redux-store";

const initialState: InitialStateType = {
  users: [],
  totalCount: 0,
  usersCount: 100,
  currentPage: 1,
  preload: false,
  loadFollowState: false,
  followId: [],
  count: 1,
};

export const usersReducer = (
  state = initialState,
  action: ReturnType<ActionType<typeof actionsUsersReducer>>
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((item) => {
          if (action.id === item.id) {
            item.followed = true;
          }
          return item;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((item) => {
          if (action.id === item.id) {
            item.followed = false;
          }
          return item;
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users.map((item: UserType) => item),
      };

    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case "CHANGE_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case "TOGGLE_PRELOADER":
      return {
        ...state,
        preload: action.preload,
      };

    case "FOLLOW_BUTTON_STATE":
      return {
        ...state,
        followId: state.loadFollowState
          ? [...state.followId, action.id]
          : [...state.followId.filter((id) => id !== action.id)],
      };

    case "LOAD_FOLLOW":
      return {
        ...state,
        loadFollowState: action.loadFollowState,
      };

    default:
      return state;
  }
};

export const actionsUsersReducer = {
  followUser: (id: number) =>
    ({
      type: "FOLLOW",
      id,
    } as const),
  unFollowUser: (id: number) =>
    ({
      type: "UNFOLLOW",
      id,
    } as const),
  setUsers: (users: Array<UserType>) =>
    ({
      type: "SET_USERS",
      users,
    } as const),
  setTotalCount: (totalCount: number) =>
    ({
      type: "SET_TOTAL_COUNT",
      totalCount,
    } as const),
  changeCurrentPage: (currentPage: number) =>
    ({
      type: "CHANGE_CURRENT_PAGE",
      currentPage,
    } as const),
  setPreload: (preload: boolean) =>
    ({
      type: "TOGGLE_PRELOADER",
      preload,
    } as const),
  followButtonState: (id: number) =>
    ({
      type: "FOLLOW_BUTTON_STATE",
      id,
    } as const),
  loadFollow: (loadFollowState: boolean) =>
    ({
      type: "LOAD_FOLLOW",
      loadFollowState,
    } as const),
};

export const userGetThunk = (currentPage: number, usersCount: number): ThunkType => {
  return (dispatch) => {
    dispatch(actionsUsersReducer.setPreload(true));
    getUsers(currentPage, usersCount).then((value) => {
      dispatch(actionsUsersReducer.setUsers(value.items));
      dispatch(actionsUsersReducer.setTotalCount(value.totalCount));
      dispatch(actionsUsersReducer.setPreload(false));
    });
  };
};

export const userGetChangeCurrentPageThunk = (
  currentPage: number,
  usersCount: number
): ThunkType => {
  return (dispatch) => {
    dispatch(actionsUsersReducer.setPreload(true));
    getUsers(currentPage, usersCount).then((value: any) => {
      dispatch(actionsUsersReducer.setUsers(value.data.items));
      dispatch(actionsUsersReducer.setTotalCount(value.data.totalCount));
      dispatch(actionsUsersReducer.setPreload(false));
    });
    dispatch(actionsUsersReducer.changeCurrentPage(currentPage));
  };
};

export const followUserThunk = (id: number): ThunkType => {
  return (dispatch) => {
    dispatch(actionsUsersReducer.loadFollow(true));
    dispatch(actionsUsersReducer.followButtonState(id));
    followUserApi(id).then((value) => {
      if (value.resultCode === 0) {
        dispatch(actionsUsersReducer.followUser(id));
        dispatch(actionsUsersReducer.loadFollow(false));
        dispatch(actionsUsersReducer.followButtonState(id));
      }
    });
  };
};

export const unFollowUserThunk = (id: number): ThunkType => {
  return (dispatch) => {
    dispatch(actionsUsersReducer.loadFollow(true));
    dispatch(actionsUsersReducer.followButtonState(id));
    unFollowUserApi(id).then((value) => {
      if (value.resultCode === 0) {
        dispatch(actionsUsersReducer.unFollowUser(id));
        dispatch(actionsUsersReducer.loadFollow(false));
        dispatch(actionsUsersReducer.followButtonState(id));
      }
    });
  };
};
