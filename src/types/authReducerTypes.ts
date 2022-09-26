import { NumberOrNullType, StringOrNullType } from "./commonTypes";
import { ActionType, AppStateType } from "../state/redux-store";
import { ThunkAction } from "redux-thunk";
import { actionsAuthReducer } from "../state/authReducer";



export type AuthMeActionCreatorDataType = {
  login: StringOrNullType;
  id: NumberOrNullType;
  email: StringOrNullType;
  isAuth: boolean;
};

export type InitialStateType = AuthMeActionCreatorDataType & {
  meAuth: boolean;
};


export type ThunkType = ThunkAction<void, AppStateType, unknown, ReturnType<ActionType<typeof actionsAuthReducer>>>;
