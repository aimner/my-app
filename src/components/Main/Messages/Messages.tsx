import React from "react";
import { Message } from "./Message/Message";
import { Dialogs } from "./Dialogs/Dialogs";
import classes from "./Messages.module.scss"
import { MessagesInputContainer } from './MessageInput/MessageInput';
import { MessageType, UserType } from "../../../types/messageReducerTypes";

type PropsType = {
  users: UserType[]
  messages: MessageType[]
  addNewMessageActionCreator: (message: string) => void
}

export const Messages: React.FunctionComponent<PropsType> = (props) => {  
  return (
    <section className={classes.section} >
      <div className={classes.messages}>
      <Dialogs users={props.users}/>
      <Message messages={props.messages}/>
      <MessagesInputContainer addNewMessage={props.addNewMessageActionCreator}></MessagesInputContainer>
      </div>
    </section>
  );
};
