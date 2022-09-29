import React, { useEffect, useState } from "react";

let messagesWebSocket = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const Chat: React.FunctionComponent<any> = (props: any) => {
  const [messages, setMessages] = useState([] as any[]);

  useEffect(() => {
    messagesWebSocket.addEventListener("message", (event: any) => {
      let newMessages = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
  }, []);

  return (
    <div>
      <ChatMessages messages={messages}></ChatMessages>
      <ChatForm />
    </div>
  );
};

const ChatMessages: React.FunctionComponent<any> = (props) => {
  return (
    <div style={{ height: "400px", overflow: "auto", width: "400px" }}>
      {props.messages.map((element: any) => {
        return <Message data={element}></Message>;
      })}
    </div>
  );
};

const Message: React.FunctionComponent<any> = (props) => {
  return (
    <div>
      <img src={props.data.photo} alt="" width={50} height={50} />
      <span>{props.data.userName}</span>
      <div>{props.data.message}</div>
    </div>
  );
};

const ChatForm: React.FunctionComponent<any> = (props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = (value: string) => {
    messagesWebSocket.send(value);
    setMessageText("");
  };
  return (
    <div>
      <textarea
        onChange={(value) => {
          setMessageText(value.currentTarget.value);
        }}
        value={messageText}></textarea>
      <br />
      <button onClick={() => sendMessage(messageText)}>Send Message</button>
    </div>
  );
};

export default Chat;
