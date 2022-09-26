import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import { AppStateType } from "../state/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
};

type MapDispacthPropsType = {};

type OwnPropsType = {};

let mapStateToPropse = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function AuthHoc<T extends object>(Component: React.ComponentType<T>) {
  const RedirectAuthHoc: React.FunctionComponent<MapStatePropsType & MapDispacthPropsType> = (
    props
  ) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Navigate to="/login" />;
    return (
      <>
        <Component {...restProps as T} />
      </>
    );
  };

  return connect<MapStatePropsType, MapDispacthPropsType, OwnPropsType, AppStateType>(
    mapStateToPropse,
    {}
  )(RedirectAuthHoc);
}

// что бы не писать isAuth в каждой контейнерной компоненте, и не делать проверку if (!props.isAuth) return <Navigate to="/login" />;
// мы создали специальную компоненту "Компоненту высшего порядка", которая принимает в себя компоненту и возвращает другую компоненту
// также мы обернули эту компоненту в коннект, что б в каждом файле не передавать isAuth: state.auth.isAuth,
