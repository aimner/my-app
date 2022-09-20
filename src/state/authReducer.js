import { stopSubmit } from "redux-form";
import { authMeApi, loginApi, logoutApi } from "../api";

const AUTH_ME = "AUTH_ME"
const IS_AUTH = "IS_AUTH"

const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    meAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                ...action.data,
            }
        case IS_AUTH:
            return {
                ...state,
                meAuth: true
            }
        default:
            return state
    }
}

export const authMe = (login, id, email, isAuth) => ({ type: AUTH_ME, data: { login, id, email, isAuth } })
export const isAuth = () => ({type: IS_AUTH})

export const authMeThunk = (isAuth = true) => {
    return (dispatch) => {
        return authMeApi().then((value) => {
            if (value.data.resultCode === 0) {
                let { login, id, email } = value.data.data;
                dispatch(authMe(login, id, email, isAuth));
            }
        });
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        loginApi(email, password, rememberMe).then((value) => {
            if (value.data.resultCode === 0) {
                dispatch(authMeThunk());
            } else {
                let message = value.data.messages.length > 0 ? value.data.messages[0] : 'Some error'
                dispatch(stopSubmit("login", {_error: message}))
            }
        });
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        logoutApi().then((value) => {
            if (value.data.resultCode === 0) {
                dispatch(authMe(null, null, null, false));
            }
        });
    }
}

export const isAuthMeThunk = () => {
    return (dispatch) => {
         let promise = dispatch(authMeThunk())

         promise.then(() => {
            dispatch(isAuth())
         })
    }
}
