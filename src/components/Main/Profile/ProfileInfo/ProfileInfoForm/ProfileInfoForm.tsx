import React from "react";
import classes from "./ProfileInfoForm.module.scss"
import { maxLength, minLength } from "../../../../../Validate/Validate";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { inputControl } from "../../../../Common/FormControl/FormControl";
import { ProfileType } from "../../../../../types/profileReducerTypes";

let maxLengthNumber = maxLength(40);

type PropsType = {
  changeProfileThunk: (profile: ProfileType) => void;
  setFormEditMode: (formEditMode: boolean) => void;
}

type PropsForm = {
  profile: ProfileType;
}

const ProfileInfoForm: React.FunctionComponent<InjectedFormProps<ProfileType>> = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="fullName"
          component={inputControl}
          validate={[minLength, maxLengthNumber]}
          type="text"
          placeholder="Fullname..."
        />
      </div>
      <div>
        <Field
          name="aboutMe"
          component={inputControl}
          validate={[minLength, maxLengthNumber]}
          type="text"
          placeholder="About Me..."
        />
      </div>
      <fieldset>
        <legend>Contacts</legend>
        <div>
          <Field
            name="contacts.vk"
            component={inputControl}
            validate={[minLength, maxLengthNumber]}
            type="text"
            placeholder="Vk..."
          />
        </div>
        <div>
          <Field
            name="contacts.github"
            component={inputControl}
            validate={[minLength, maxLengthNumber]}
            type="text"
            placeholder="Github..."
          />
        </div>
        <div>
          <Field
            name="contacts.instagram"
            component={inputControl}
            validate={[minLength, maxLengthNumber]}
            type="text"
            placeholder="Instagram..."
          />
        </div>
        <div>
          <Field
            name="contacts.twitter"
            component={inputControl}
            validate={[minLength, maxLengthNumber]}
            type="text"
            placeholder="Twitter..."
          />
        </div>
      </fieldset>
      <div>
        <Field name="lookingForAJob" component="input" type="checkbox" />
        Looking for a job?
      </div>
      <div>
        <Field
          name="lookingForAJobDescription"
          component={inputControl}
          validate={[minLength, maxLengthNumber]}
          type="text"
          placeholder="Job description..."
        />
      </div>
      <div className={props.error ? classes.error : null}>{props.error}</div>
      <div>
        <button>Отправить данные</button>
      </div>
    </form>
  );
};

const ProfileInfoFormRedux = reduxForm<ProfileType>({
  form: "editInfo",
})(ProfileInfoForm);

export const ProfileInfoFormContainer: React.FunctionComponent<PropsType & PropsForm> = (props) => {
  
  const onSubmit = (value: ProfileType) => {
   let v = props.changeProfileThunk(value) as unknown as Promise<string>;
   v.then(() => {
    props.setFormEditMode(false)
   })
  };
  return (
    <div>
      <ProfileInfoFormRedux
        initialValues={props.profile}
        onSubmit={onSubmit}
      />
    </div>
  );
};
