import React from "react";
import classes from "./Login.module.scss";
import { Field, reduxForm } from "redux-form";
import { inputControl } from "../../Common/FormControl/FormControl";
import { minLength, maxLength } from "../../../Validate/Validate";
import { connect } from "react-redux/es/exports";
import { loginThunk } from "../../../state/authReducer";
import { Navigate } from "react-router-dom";

let maxLengthNumber = maxLength(20);

const LoginContainer = (props) => {

  const onSubmit = (value) => {
    props.loginThunk(value.email, value.password, )
  }

  if(props.isAuth) return <Navigate to="/profile" />   

  return (
    <section className={classes.section}>
      <div className={classes.section__profile}>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
      </div>
    </section>
  );
};

const Login = (props) => {

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
      <div>
        <button>Отправить данные</button>
      </div>
    </form>
  );
};

const LoginFormRedux = reduxForm({
  form: "login",
})(Login);

const mapStateToPropse = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToPropse, { loginThunk })(LoginContainer)
