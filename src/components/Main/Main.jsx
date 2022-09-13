import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./Main.module.scss";
import { NotFound } from "./NotFound/NotFound";
import { SidePanel } from "./SidePanel/SidePanel";
import ProfileContainerWithRouter from "./Profile/ProfileContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UserContainer from "./Users/UsersContainer";
import LoginFormRedux  from './Login/Login';


export const Main = () => {
  return (
      <main>
        <div className={classes.main__container}>
          <SidePanel />
          <Routes>
            <Route
              path="/profile"
              element={<ProfileContainerWithRouter />}
            ></Route>
            <Route
              path="/profile/:userId"
              element={<ProfileContainerWithRouter />}
            ></Route>
            <Route path="/messages/*" element={<MessagesContainer />}></Route>
            <Route path="/users" element={<UserContainer />}></Route>
            <Route path="/login" element={<LoginFormRedux />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </main>

  );
};
