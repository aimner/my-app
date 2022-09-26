import { ThunkAction } from "redux-thunk";
import { actionsProfileReducer } from "../state/profileReducer";
import { ActionType, AppStateType } from "../state/redux-store";
import { stopSubmit } from 'redux-form';

export type InitialStateType = {
  status: string;
  posts: Array<PostType>;
  profile: ProfileType;
};

export type PostType = {
  text: string;
  user: string;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotoType;
  aboutMe: string
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};


export type PhotoType = {
  large: string | null;
  small: string | null;
};


export type ThunkType = ThunkAction<void, AppStateType, unknown, ReturnType<ActionType<typeof actionsProfileReducer>> | ReturnType<typeof stopSubmit>>;


