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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// window.store = store

export default store;