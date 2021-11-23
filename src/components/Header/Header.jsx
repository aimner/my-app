import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className="header">
     <img className={classes.img} alt="logo" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ha3_p89n--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/134122/596103e7-f776-4202-9dcb-e133ce3cb222.png"></img>
    </div>
  );
}

export default Header;
