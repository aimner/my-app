import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengtth50, minLength } from '../../../../Validate/Validate';
import { textareaControl } from './../../../Common/FormControl/FormControl';



const ProfileInput = (props) => {
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

export const ProfileInputContainer = (props) => {
  let lol = (formData) => {
    props.addNewPostText(formData.post)
  }

  return (
    <div>
      <ProfileInputContainerRedux onSubmit={lol}/>
    </div>
  );
};

const ProfileInputContainerRedux = reduxForm({
  form: "post",
})(ProfileInput);
