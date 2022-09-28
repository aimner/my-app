import { PhotoType } from "./profileReducerTypes";
import { ThunkAction } from "redux-thunk";
import { ActionType, AppStateType } from "../state/redux-store";
import { actionsUsersReducer } from "../state/usersReducer";

export type InitialStateType = {
  users: Array<UserType>;
  totalCount: number;
  usersCount: number;
  currentPage: number;
  preload: boolean;
  loadFollowState: boolean;
  followId: number[];
  count: number;
  filter: FilterType;
};

export type FilterType = {
  term: string;
  friend: string;
};

export type UserType = {
  name: string;
  id: number;
  photos: PhotoType;
  status: string | null;
  followed: boolean;
};

export type ThunkType = ThunkAction<
  void,
  AppStateType,
  unknown,
  ReturnType<ActionType<typeof actionsUsersReducer>>
>;
