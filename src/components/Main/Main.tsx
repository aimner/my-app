import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./Main.module.scss";
import { NotFound } from "./NotFound/NotFound";
// import ProfileContainerWithRouter from "./Profile/ProfileContainer";
// import MessagesContainer from "./Messages/MessagesContainer";
// import UserContainer from "./Users/UsersContainer";
import LoginFormRedux from "./Login/Login";
import { Preloader } from "../Common/Preloader/Preloader";

const ProfileContainerWithRouter = React.lazy(() => import("./Profile/ProfileContainer"));

const MessagesContainer = React.lazy(() => import("./Messages/MessagesContainer"));

const UserContainer = React.lazy(() => import("./Users/UsersContainer"));

const ChatContainer = React.lazy(() => import("./Chat/Chat"));

export const Main: React.FunctionComponent = () => {
  return (
    <div className={classes.main__container}>
      <React.Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/profile" element={<ProfileContainerWithRouter />}></Route>
          <Route path="/profile/:userId" element={<ProfileContainerWithRouter />}></Route>
          <Route path="/messages/*" element={<MessagesContainer />}></Route>
          <Route path="/chat/" element={<ChatContainer />}></Route>
          <Route path="/users" element={<UserContainer />}></Route>
          <Route path="/login" element={<LoginFormRedux />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};
