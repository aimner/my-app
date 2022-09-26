import React from "react";

type PropsType = {
    text: string
  }
  

export const MessageText: React.FunctionComponent<PropsType> = (props) => {
    return (
        <div>
         {props.text}
        </div>
    )
}