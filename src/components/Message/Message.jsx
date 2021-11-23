import React from "react";
import classes from './Message.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsName from "./DialogsName/DialogsName";


const Message = (props) => {

let dialogsItemNew = props.messagePage.dialogsItem.map( el => <DialogsItem content={el.content} />);  
let dialogsNew = props.messagePage.dialogs.map( el => <DialogsName name={el.name} id={el.id} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsName}>
             {dialogsNew} 
            </div>
            <div className={classes.dialogsItem}>
             {dialogsItemNew} 
            </div>
        </div>
    )
}

export default Message;