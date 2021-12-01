import React from "react";
import classes from './Message.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsName from "./DialogsName/DialogsName";
import {newMessageAction, newMessageChangeAction} from '../../redux/Messagesreducer';


const Message = (props) => {

let dialogsItemNew = props.messagePage.dialogsItem.map( el => <DialogsItem content={el.content} />);  
let dialogsNew = props.messagePage.dialogs.map( el => <DialogsName name={el.name} id={el.id} />);

let newMessage = React.createRef();

let addNewMessage = () => {
    props.dispatch(newMessageAction());
}

let changeMessageText = () => {
    let text = newMessage.current.value;
    props.dispatch(newMessageChangeAction(text));
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
              <textarea ref={newMessage} onChange={changeMessageText} value={props.messagePage.firstMessage}></textarea>
              <button onClick={addNewMessage}>Send Message</button> 
            </div>
            
        </div>
    )
}

export default Message;