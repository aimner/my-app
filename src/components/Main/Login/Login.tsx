import React from "react";
import classes from "./Login.module.scss";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { inputControl } from "../../Common/FormControl/FormControl";
import { minLength, maxLength } from "../../../Validate/Validate";
import { connect } from "react-redux/es/exports";
import { loginThunk } from "../../../state/authReducer";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../../state/redux-store";

let maxLengthNumber = maxLength(20);

type MapStatePropsType = {
  isAuth: boolean;
};

type MapDispacthPropsType = {
  loginThunk: (email: string, password: string, rememberMe?: boolean) => void;
};

type OwnPropsType = {};

type LoginFormRedux = { email: string; password: string; rememberMe?: boolean };

const LoginContainer: React.FunctionComponent<MapStatePropsType & MapDispacthPropsType> = (
  props
) => {
  const onSubmit = (value: LoginFormRedux) => {
    props.loginThunk(value.email, value.password);
  };

  if (props.isAuth) return <Navigate to="/profile" />;

  return (
    <section className={classes.section}>
      <div className={classes.section__profile}>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit} />
      </div>
    </section>
  );
};

const Login: React.FunctionComponent<InjectedFormProps<LoginFormRedux>> = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={inputControl}
          validate={[minLength, maxLengthNumber]}
          type="text"
          placeholder="Login..."
        />
      </div>
      <div>
        <Field
          name="password"
          component={inputControl}
          validate={[minLength, maxLengthNumber]}
          type="text"
          placeholder="Password..."
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        запомнить меня?
      </div>
      <div className={props.error ? classes.error : ''}>{props.error}</div>
      <div>
        <button>Отправить данные</button>
      </div>
    </form>
  );
};

const LoginFormRedux = reduxForm<LoginFormRedux>({
  form: "login",
})(Login);

const mapStateToPropse = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect<MapStatePropsType, MapDispacthPropsType, OwnPropsType, AppStateType>(
  mapStateToPropse,
  { loginThunk }
)(LoginContainer);
