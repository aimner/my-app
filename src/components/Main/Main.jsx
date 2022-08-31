import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./Main.module.scss";
import { NotFound } from "./NotFound/NotFound";
import { SidePanel } from "./SidePanel/SidePanel";
import { ProfileContainer } from "./Profile/ProfileContainer";
import { MessagesContainer } from "./Messages/MessagesContainer";
import { UserContainer } from './Users/UsersContainer';

export const Main = (props) => {
  return (
    <BrowserRouter>
      <main>
        <div className={classes.main__container}>
          <SidePanel />
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}></Route>
            <Route path="/messages/*" element={<MessagesContainer />}></Route>
            <Route path="/users" element={<UserContainer />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};
