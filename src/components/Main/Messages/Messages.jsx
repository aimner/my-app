import React from "react";
import { Message } from "./Message/Message";
import { Dialogs } from "./Dialogs/Dialogs";
import classes from "./Messages.module.scss"
import { MessageInput } from './MessageInput/MessageInput';





export const Messages = (props) => {  
  return (
    <section className={classes.section} >
      <div className={classes.messages}>
      <Dialogs users={props.users}/>
      <Message messages={props.messages}/>
      <MessageInput changeMessageText={props.changeMessageText} newMessage={props.newMessage} addNewMessage={props.addNewMessage}></MessageInput>
      </div>
    </section>
  );
};
