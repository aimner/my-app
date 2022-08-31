import React from "react";
import { MessageText } from "./MessageText/MessageText";


export const Message = (props) => {
  let arrMessage = props.messages.map(item => <MessageText text={item.text}></MessageText>)

  return (
    <div>
      {arrMessage}
    </div>
  );
};
