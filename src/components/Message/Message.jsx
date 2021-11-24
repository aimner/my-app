import React from "react";
import classes from './Message.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsName from "./DialogsName/DialogsName";


const Message = (props) => {

let dialogsItemNew = props.messagePage.dialogsItem.map( el => <DialogsItem content={el.content} />);  
let dialogsNew = props.messagePage.dialogs.map( el => <DialogsName name={el.name} id={el.id} />);

let newMessage = React.createRef();
let addNewMessage = () => {
    let text = newMessage.current.value;
    props.newmessage(text);
}

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsName}>
             {dialogsNew} 
            </div>
            <div className={classes.dialogsItem}>
             {dialogsItemNew}
            </div>
            <form className={classes.formarea}>
              <textarea ref={newMessage}></textarea>
              <button onClick={addNewMessage}>Send Message</button> 
            </form>
            
        </div>
    )
}

export default Message;