import React from "react";
import { Messages } from "./Messages";
import {
  addNewMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../state/messageReducer";


import { connect } from 'react-redux/es/exports';

// export const MessagesContainer = (props) => {

//   let users = props.store.getState().messagesPage.users;

//   let messages = props.store.getState().messagesPage.messages;

//   let newMessage = props.store.getState().messagesPage.newMessage;

//   const changeMessageText = (text) => {
//     props.store.dispatch(updateNewMessageActionCreator(text));
//   };

//   const addNewMessage = () => {
//     props.store.dispatch(addNewMessageActionCreator());
//   };

//   return (
//     <Messages
//       users={users}
//       messages={messages}
//       newMessage={newMessage}
//       changeMessageText={changeMessageText}
//       addNewMessage={addNewMessage}
//     ></Messages>
//   );
// };


let mapStateToPropse = (state) => {
    return {
      newMessage: state.messagesPage.newMessage,
      users: state.messagesPage.users,
      messages: state.messagesPage.messages
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
        dispatch(addNewMessageActionCreator())
      },
      changeMessageText: (text) => {
        dispatch(updateNewMessageActionCreator(text))
      }
    }
  }
  
  
  export const MessagesContainer = connect(mapStateToPropse, mapDispatchToProps)(Messages)