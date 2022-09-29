import React, { SyntheticEvent } from "react";
import { useState, useEffect } from "react";
import { ProfileType } from "../../../../types/profileReducerTypes";
import classes from "./ProfileInfo.module.scss";
import { ProfileInfoFormContainer } from "./ProfileInfoForm/ProfileInfoForm";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

type PropsType = {
  profile: ProfileType;
  status: string;
  authId: number;
  setStatusThunk: (status: string) => void;
  changePhotoThunk: (file: File) => void;
  changeProfileThunk: (profile: ProfileType) => void;
};

export const ProfileInfo: React.FunctionComponent<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [formEditMode, setFormEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.setStatusThunk(status);
  };

  const changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };

  const sendPhoto = (file: File) => {
    props.changePhotoThunk(file);
  };

  // const sendPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   props.changePhotoThunk(event.target.files![0]);
  // };

  const showHideEditForm = () => {
    setFormEditMode(!formEditMode);
  };

  let uploadFile: UploadProps = {
    onChange({file}) {
      console.log(file)
      // sendPhoto(file.originFileObj as unknown as File)
    },
  };

  return (
    <div className={classes.profile__info}>
      <div>
        {props.profile.photos?.small ? (
          <Avatar size={128} src={props.profile.photos?.small} />
        ) : (
          <Avatar size={128} icon={<UserOutlined />} />
        )}
        {props.authId === props.profile.userId ? (
          // <input type={"file"} onChange={sendPhoto} />
          <Upload {...uploadFile}>
            <Button icon={<UploadOutlined/>}>Upload</Button>
          </Upload>
        ) : null}
      </div>

      {editMode ? (
        <input
          type="text"
          autoFocus={true}
          onBlur={deactivateEditMode}
          defaultValue={status}
          onChange={changeStatus}
        />
      ) : (
        <div onDoubleClick={activateEditMode}>
          <span className={classes.infoText}>Status:</span> {status}
        </div>
      )}
      {formEditMode ? (
        <ProfileInfoFormContainer
          profile={props.profile}
          changeProfileThunk={props.changeProfileThunk}
          setFormEditMode={setFormEditMode}
        />
      ) : (
        <div className="profile-description">
          <ul>
            <li>
              <span className={classes.infoText}>Full name: </span>
              {props.profile.fullName}
            </li>
            <li>
              <span className={classes.infoText}>ID: </span>
              {props.profile.userId}
            </li>
            <li>
              <span className={classes.infoText}>About Me: </span>
              {props.profile.aboutMe || "Не указано"}
            </li>
            <li>
              <span className={classes.infoText}>VK: </span>
              {props.profile.contacts?.vk || "Не указано"}
            </li>
            <li>
              <span className={classes.infoText}>Github: </span>
              {props.profile.contacts?.github || "Не указано"}
            </li>
            <li>
              <span className={classes.infoText}>Instagram: </span>
              {props.profile.contacts?.instagram || "Не указано"}
            </li>
            <li>
              <span className={classes.infoText}>Twitter: </span>
              {props.profile.contacts?.twitter || "Не указано"}
            </li>
            <li>
              <span className={classes.infoText}>Twitter: </span>
              {props.profile.contacts?.twitter || "Не указано"}
            </li>
            <li>
              <span className={classes.infoText}>Job description: </span>
              {props.profile.lookingForAJobDescription || "Не указано"}
            </li>
          </ul>
        </div>
      )}
      {props.authId === props.profile.userId ? (
        <button onClick={showHideEditForm}>Edit</button>
      ) : null}
    </div>
  );
};
