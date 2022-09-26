import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengtth50, minLength } from '../../../../Validate/Validate';
import { textareaControl } from '../../../Common/FormControl/FormControl';

type PropsType = {
   post: string
}

type PropsFormType = {
  addNewPostText: (text: string) => void
}

const ProfileInput: React.FunctionComponent<InjectedFormProps<PropsType>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={textareaControl}
        name={'post'}
        validate={[maxLengtth50, minLength]}
        placeholder="Post text..."
      />
      <button>Send</button>
    </form>
  );
};

export const ProfileInputContainer: React.FunctionComponent<PropsFormType> = (props) => {
  let lol = (formData: PropsType) => {
    console.log(formData);
    props.addNewPostText(formData.post)
  }

  return (
    <div>
      <ProfileInputContainerRedux onSubmit={lol}/>
    </div>
  );
};

const ProfileInputContainerRedux = reduxForm<PropsType>({
  form: "post",
})(ProfileInput);
