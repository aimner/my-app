import React from "react";
import classes from "./App.module.scss";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Main } from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux/es/exports";
import { authMeThunk, isAuthMeThunk } from "./state/authReducer";
import { Preloader } from "./components/Common/Preloader/Preloader";
import { AppStateType } from "./state/redux-store";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { SidePanel } from "./components/Main/SidePanel/SidePanel";

const { Header, Content, Footer, Sider } = Layout;

type PropsType = MapStatePropsType & MapDispacthPropsType & OwnPropsType;

type MapStatePropsType = {
  meAuth: boolean;
};

type MapDispacthPropsType = {
  isAuthMeThunk: () => void;
  authMeThunk: (isAuth: boolean) => void;
};

type OwnPropsType = {};

class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.isAuthMeThunk();
  }

  render() {
    if (!this.props.meAuth) return <Preloader />;

    return (
      <BrowserRouter>
        {/* <div className={classes.container}>
          <HeaderContainer />
          <Main />
        </div> */}
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
              <Sider className="site-layout-background" width={200}>
                <SidePanel />
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280}}>
                <Main />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToPropse = (state: AppStateType) => {
  return {
    meAuth: state.auth.meAuth,
  };
};

export default compose(
  connect<MapStatePropsType, MapDispacthPropsType, OwnPropsType, AppStateType>(mapStateToPropse, {
    authMeThunk,
    isAuthMeThunk,
  })
)(App);
