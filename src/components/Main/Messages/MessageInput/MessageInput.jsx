import React from "react";



export const MessageInput = (props) => {

    const messageText = React.createRef()

    const onChangeMessageText = () => {
       props.changeMessageText(messageText.current.value)
    }
    
    const onAddNewMessage = () => {
       props.addNewMessage()
    }

  return (
    <div>
      <textarea ref={messageText} onChange={onChangeMessageText} value={props.newMessage.text}></textarea>
      <button onClick={onAddNewMessage}>Send</button>
    </div>
  );
};
