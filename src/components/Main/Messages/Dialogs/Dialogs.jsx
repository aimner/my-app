import React from "react";
import classes from "./Dialogs.module.scss"
import { Dialog } from "./Dialog/Dialog"



export const Dialogs = (props) => {
    
    let arrElement = props.users.map((item, index) => <Dialog text={item.name} key={index}></Dialog>)
     
    return (
        <div className={classes.users}>
            {arrElement}
        </div>
    )
}