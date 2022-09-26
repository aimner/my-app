import React from "react";
import classes from "./SidePanel.module.scss";
import { NavLink} from "react-router-dom";


export const SidePanel: React.FunctionComponent = () => {

  


  const setActive = ({ isActive }: {isActive: boolean}) =>(isActive ? `${classes.active} ${classes.list_item__link }` : `${classes.list_item__link }`);

  return (
    <section className={classes.section}>
      <div className={classes.section_side__panel}>
        <ul className={classes.list}>
          <li><NavLink to="/messages" className={setActive}>Messages</NavLink></li>
          <li><NavLink to="/users" className={setActive} >Users</NavLink></li>
          <li><NavLink to="/profile" className={setActive} >Profile</NavLink></li>
          <li><NavLink to="/music" className={setActive}>Music</NavLink></li>
          <li><NavLink to="/settings" className={setActive}>Settings</NavLink></li>
        </ul>
      </div>
    </section>
  );
};
