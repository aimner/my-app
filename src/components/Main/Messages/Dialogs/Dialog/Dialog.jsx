import React from "react";
import { NavLink } from 'react-router-dom';



export const Dialog = (props) => {
    let path = `/messages/${props.text}`
    return (
        <div>
            <NavLink to={path}>{props.text}</NavLink>
        </div>
    )
}