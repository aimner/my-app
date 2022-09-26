import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { profileReducer } from "./profileReducer"
import { messageReducer } from './messageReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof reducers>

export type ActionType<T> = T extends {[key: string]: infer U} ? U : never 

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//@ts-ignore

export default store;