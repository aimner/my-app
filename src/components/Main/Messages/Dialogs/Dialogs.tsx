import React from "react";
import classes from "./Dialogs.module.scss"
import { Dialog } from "./Dialog/Dialog"
import { UserType } from "../../../../types/messageReducerTypes";

type PropsType = {
    users: UserType[]
}


export const Dialogs: React.FunctionComponent<PropsType> = (props) => {
    
    let arrElement = props.users.map((item, index) => <Dialog text={item.name} key={index}></Dialog>)
     
    return (
        <div className={classes.users}>
            {arrElement}
        </div>
    )
}