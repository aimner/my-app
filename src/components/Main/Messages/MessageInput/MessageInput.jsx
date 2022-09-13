import React from "react";
import { Field, reduxForm } from "redux-form";
import { minLength } from './../../../../Validate/Validate';
import { textareaControl } from './../../../Common/FormControl/FormControl';


const MessageInput = (props) => {


  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={textareaControl}
        name={'message'}
        validate={[minLength]}
      />
      <button>Send</button>
    </form>
  );
};

export const MessagesInputContainer = (props) => {
  let onSubmit = (formData) => {

    props.addNewMessage(formData.message)

  }


  return (
    <div>
      <MessageFormRedux onSubmit={onSubmit} />
    </div>
  );
};

const MessageFormRedux = reduxForm({
  form: "message",
})(MessageInput);
