import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { minLength } from "../../../../Validate/Validate";
import { textareaControl } from "../../../Common/FormControl/FormControl";

type PropsFormReduxContainer = {
  addNewMessage: (message: string) => void;
};

type FormData = {
  message: string;
};

const MessageInput: React.FunctionComponent<InjectedFormProps<FormData>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field component={textareaControl} name={"message"} validate={[minLength]} />
      <button>Send</button>
    </form>
  );
};

export const MessagesInputContainer: React.FunctionComponent<PropsFormReduxContainer> = (props) => {
  let onSubmit = (formData: FormData) => {
    props.addNewMessage(formData.message);
  };
  return (
    <div>
      <MessageFormRedux onSubmit={onSubmit} />
    </div>
  );
};

const MessageFormRedux = reduxForm<FormData>({
  form: "message",
})(MessageInput);
