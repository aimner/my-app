import React from "react";
import classes from "./FormControl.module.scss"


export const textareaControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <textarea {...input} {...props} className={hasError ? classes.textarea_error : null}></textarea>
            <div>
                <span className={hasError ? classes.text_error : null}>{meta.touched ? meta.error : ''}</span>
            </div>
        </div>
    )
}

export const inputControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <input {...input} {...props} className={hasError ? classes.textarea_error : null}></input>
            <div>
                <span className={hasError ? classes.text_error : null}>{meta.touched ? meta.error : ''}</span>
            </div>
        </div>
    )
}

