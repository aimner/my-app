import React from "react";
import { NavLink } from 'react-router-dom';

type PropsType = {
    text: string
    key: number
}


export const Dialog: React.FunctionComponent<PropsType> = (props) => {
    let path = `/messages/${props.text}`
    return (
        <div>
            <NavLink to={path}>{props.text}</NavLink>
        </div>
    )
}