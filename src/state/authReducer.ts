import { stopSubmit } from "redux-form";
import { InitialStateType, ThunkType } from "../types/authReducerTypes";
import { NumberOrNullType, StringOrNullType } from "../types/commonTypes";
import { authMeApi, loginApi, logoutApi } from "./../api";
import { ActionType } from "./redux-store";

const initialState: InitialStateType = {
  login: null,
  id: null,
  email: null,
  isAuth: false,
  meAuth: false,
};

export const authReducer = (state = initialState, action: ReturnType<ActionType<typeof actionsAuthReducer>>): InitialStateType => {
  switch (action.type) {
    case 'AUTH_ME':
      return {
        ...state,
        ...action.data,
      };
    case 'IS_AUTH':
      return {
        ...state,
        meAuth: true,
      };
    default:
      return state;
  }
};

export const actionsAuthReducer = {
  authMe:(login: StringOrNullType, id: NumberOrNullType, email: StringOrNullType, isAuth: boolean) => ({
    type: 'AUTH_ME',
    data: { login, id, email, isAuth },
  } as const),
  isAuth: () => ({ type: 'IS_AUTH' } as const)
}


export const authMeThunk = (isAuth = true): ThunkType => {
  return async (dispatch, getState) => {
    let value = await authMeApi();
    
    if (value.resultCode === 0) {
      let { login, id, email } = value.data;
      dispatch(actionsAuthReducer.authMe(login, id, email, isAuth));
    }
  };
};

export const loginThunk = (email: string, password: string, rememberMe?: boolean): ThunkType => {
  return (dispatch, getState) => {
    loginApi(email, password, rememberMe).then((value) => {
      console.log(value)
      if (value.resultCode === 0) {
        dispatch(authMeThunk());
      } else {
        let message = value.messages.length > 0 ? value.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logoutThunk = (): ThunkType => {
  return (dispatch, getState) => {
    logoutApi().then((value) => {
      if (value.resultCode === 0) {
        dispatch(actionsAuthReducer.authMe(null, null, null, false));
      }
    });
  };
};

export const isAuthMeThunk = (): ThunkType => {
  return async (dispatch, getState) => {
    await dispatch(authMeThunk());
    dispatch(actionsAuthReducer.isAuth());
  };
};
