import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux/es/exports";

let mapStateToPropse = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function AuthHoc(Component) {
  function RedirectAuthHoc(props) {
    if (!props.isAuth) return <Navigate to="/login" />;
    return (
      <>
        <Component {...props} />
      </>
    );
  }

  return connect(mapStateToPropse)(RedirectAuthHoc)
}

// что бы не писать isAuth в каждой контейнерной компоненте, и не делать проверку if (!props.isAuth) return <Navigate to="/login" />;
// мы создали специальную компоненту "Компоненту высокого порядка", которая принимает в себя компоненту и возвращает другую компоненту
// также мы обернули эту компоненту в коннект, что б в каждом файле не передавать isAuth: state.auth.isAuth,
