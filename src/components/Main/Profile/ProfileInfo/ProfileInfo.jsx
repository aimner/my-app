import React from "react";
import classes from "./ProfileInfo.module.scss"

export const ProfileInfo = () => {
  return (
    <div className={classes.profile__info}>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/85486375?v=4"
          alt="avatar"
          className={classes.avatar}
        />
      </div>
      <div className="profile-description">
        <ul>
          <li>Egor</li>
          <li>25</li>
          <li>Mosty</li>
          <li>BNTU 2014.</li>
          <li>09.04.1994</li>
        </ul>
      </div>
    </div>
  );
};
