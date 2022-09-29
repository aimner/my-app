import React from "react";
import { WrappedFieldProps } from "redux-form";
import classes from "./FormControl.module.scss";

export const textareaControl: React.FunctionComponent<WrappedFieldProps> = ({
  input,
  meta,
  ...props
}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div>
      <textarea
        {...input}
        {...props}
        className={hasError ? classes.textarea_error : ''}></textarea>
      <div>
        <span className={hasError ? classes.text_error : ''}>
          {meta.touched ? meta.error : ""}
        </span>
      </div>
    </div>
  );
};

export const inputControl: React.FunctionComponent<WrappedFieldProps> = ({
  input,
  meta,
  ...props
}) => {
  let hasError = meta.touched && meta.error;

  return (
    <div>
      <input {...input} {...props} className={hasError ? classes.textarea_error : ''}></input>
      <div>
        <span className={hasError ? classes.text_error : ''}>
          {meta.touched ? meta.error : ""}
        </span>
      </div>
    </div>
  );
};