import { InitialStateType } from "../types/messageReducerTypes";
import { ActionType } from "./redux-store";

export const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState: InitialStateType = {
  users: [
    { name: "sasha" }, 
    { name: "egor" },
    { name: "artem" },
    { name: "oleg" },
    { name: "misha" },
    { name: "dima" },
  ],
  messages: [
    { text: "Hi", user: "egor" },
    { text: "How are you?", user: "egor" },
  ],
};

export function messageReducer(
  state = initialState,
  action: ReturnType<ActionType<typeof actionsMessageReducer>>
): InitialStateType {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { user: "egor", text: action.message }],
      };
    }
    default:
      return state;
  }
}

export const actionsMessageReducer = {
  addNewMessageActionCreator: (message: string) => ({ type: ADD_NEW_MESSAGE, message }),
};
