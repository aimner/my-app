import { ThunkAction } from 'redux-thunk';
import { ADD_NEW_MESSAGE } from '../state/messageReducer';
import { ActionType, AppStateType } from '../state/redux-store';
import { actionsMessageReducer } from './../state/messageReducer';

export type InitialStateType = {
   users: Array<UserType>,
   messages: Array<MessageType>
}

export type UserType = {
    name: string
}

export type MessageType = {
    text: string,
    user: string
}


export type ThunkType = ThunkAction<void, AppStateType, unknown, ReturnType<ActionType<typeof actionsMessageReducer>>>