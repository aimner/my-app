import { combineReducers, createStore } from "redux";
import messageReducer from './Messagesreducer';
import postsReducer from './Postsreducer';

let reducers = combineReducers(
    {
        profilePage: postsReducer,
        messagePage: messageReducer,
    }
);

let store = createStore(reducers);

export default store;