import { authMeApi, loginApi, logoutApi } from "../api";

const AUTH_ME = "AUTH_ME"

const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const authMe = (login, id, email, isAuth) => ({ type: AUTH_ME, data: { login, id, email, isAuth } })

export const authMeThunk = (isAuth = true) => {
    return (dispatch) => {
        authMeApi().then((value) => {
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