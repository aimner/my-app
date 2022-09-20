import React from "react";
import { useState, useEffect } from "react";
import classes from "./ProfileInfo.module.scss";

export const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.setStatusThunk(status);
  }

  const changeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
 
    return (
      <div className={classes.profile__info}>
        <div>
          <img
            src={
              props.profile.photos?.small
                ? props.profile.photos.small
                : "https://avatars.githubusercontent.com/u/85486375?v=4"
            }
            alt="avatar"
            className={classes.avatar}
          />
        </div>
        {editMode ? (
          <input
            type="text"
            autoFocus={true}
            onBlur = {deactivateEditMode}
            defaultValue={status}
            onChange={changeStatus}
          />
        ) : (
          <div onDoubleClick={activateEditMode}>{status}</div>
        )}
        <div className="profile-description">
          <ul>
            <li>{props.profile.fullName}</li>
            <li>{props.profile.userId}</li>
            <li>{props.profile.aboutMe}</li>
          </ul>
        </div>
      </div>
    );
  
}

