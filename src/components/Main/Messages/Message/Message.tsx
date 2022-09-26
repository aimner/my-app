import React from "react";
import { MessageType } from "../../../../types/messageReducerTypes";
import { MessageText } from "./MessageText/MessageText";

type PropsType = {
  messages: MessageType[]
}


export const Message: React.FunctionComponent<PropsType> = (props) => {
  let arrMessage = props.messages.map(item => <MessageText text={item.text}></MessageText>)

  return (
    <div>
      {arrMessage}
    </div>
  );
};
