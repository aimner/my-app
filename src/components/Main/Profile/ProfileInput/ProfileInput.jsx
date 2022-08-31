import React from "react";


export const ProfileInput = (props) => {
  let inputText = React.createRef();

  let addNewPostText = () => {
    props.addNewPostText()
  };

  let changePostText = () => {
    props.changePostText(inputText.current.value)
  };
  
  return (
    <div>
      <textarea
        type="text"
        ref={inputText}
        onChange={changePostText}
        value={props.newPost.text}
      />
      <button onClick={addNewPostText}>Send</button>
    </div>
  );
};
