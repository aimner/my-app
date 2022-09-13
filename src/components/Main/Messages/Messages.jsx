import React from "react";
import { Message } from "./Message/Message";
import { Dialogs } from "./Dialogs/Dialogs";
import classes from "./Messages.module.scss"
import { MessagesInputContainer } from './MessageInput/MessageInput';






export const Messages = (props) => {  
  return (
    <section className={classes.section} >
      <div className={classes.messages}>
      <Dialogs users={props.users}/>
      <Message messages={props.messages}/>
      <MessagesInputContainer addNewMessage={props.addNewMessage}></MessagesInputContainer>
      </div>
    </section>
  );
};
