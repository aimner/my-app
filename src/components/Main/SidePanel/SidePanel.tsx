import React from "react";
import classes from "./SidePanel.module.scss";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

export const SidePanel: React.FunctionComponent = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${classes.active} ${classes.list_item__link}` : `${classes.list_item__link}`;

  return (
    // <section className={classes.section}>
    //   <div className={classes.section_side__panel}>
    //     <ul className={classes.list}>
    //       <li><NavLink to="/messages" className={setActive}>Messages</NavLink></li>
    //       <li><NavLink to="/users" className={setActive} >Users</NavLink></li>
    //       <li><NavLink to="/profile" className={setActive} >Profile</NavLink></li>
    //       <li><NavLink to="/music" className={setActive}>Music</NavLink></li>
    //       <li><NavLink to="/settings" className={setActive}>Settings</NavLink></li>
    //     </ul>
    //   </div>
    // </section>

    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%" }}>
      <Menu.Item>
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/messages">Messages</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/chat">Chat</NavLink>
      </Menu.Item>
      <Menu.SubMenu title="Users">
        <Menu.Item>
          <NavLink to="/users">Friends</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/users">All users</NavLink>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>Settings</Menu.Item>
    </Menu>
  );
};
