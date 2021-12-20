import React from "react";
import StoreContext from "../../redux/StoreContext";
import {
  newMessageAction,
  newMessageChangeAction,
} from "../../redux/Messagesreducer";
import Message from "./Message";

const MessageContainer = (props) => {
  //  let state = props.store.getState();

  // let addMessageText = () => {
  //     props.store.dispatch(newMessageAction());
  // }

  // let changeMessageText = (text) => {

  //     props.store.dispatch(newMessageChangeAction(text));
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessageText = () => {
          store.dispatch(newMessageAction());
        };

        let changeMessageText = (text) => {
          store.dispatch(newMessageChangeAction(text));
        };

        return <Message
            addNewMessageText={addMessageText}
            changeNewMessageText={changeMessageText}
            dialogsItem={state.messagePage.dialogsItem}
            dialogs={state.messagePage.dialogs}
            firstMessage={state.messagePage.firstMessage}/>
      }}
    </StoreContext.Consumer>
  );
};

export default MessageContainer;
