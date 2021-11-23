import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
     <NavLink to="/profile" className={classes.link} activeClassName={classes.active}>Profile</NavLink>
     <NavLink to="/message" className={classes.link} activeClassName={classes.active}>Message</NavLink>
     <NavLink to="/news" className={classes.link} activeClassName={classes.active}>News</NavLink>
     <NavLink to="/music" className={classes.link} activeClassName={classes.active}>Music</NavLink>
     <button></button>
    </div>
  );
}

export default Navbar;
