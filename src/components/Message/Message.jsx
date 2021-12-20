import React from "react";
import classes from './Message.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsName from "./DialogsName/DialogsName";



const Message = (props) => {

let dialogsItemNew = props.dialogsItem.map( el => <DialogsItem content={el.content} />);  
let dialogsNew = props.dialogs.map( el => <DialogsName name={el.name} id={el.id} />);

let newMessage = React.createRef();

let addNewMessage = () => {
    props.addNewMessageText();
}

let changeMessageText = () => {
    let text = newMessage.current.value;
    props.changeNewMessageText(text);
};

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsName}>
             {dialogsNew} 
            </div>
            <div className={classes.dialogsItem}>
             {dialogsItemNew}
            </div>
            <div className={classes.formarea}>
              <textarea ref={newMessage} onChange={changeMessageText} value={props.firstMessage}></textarea>
              <button onClick={addNewMessage}>Send Message</button> 
            </div>
            
        </div>
    )
}

export default Message;