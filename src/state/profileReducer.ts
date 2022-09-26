import {
  getProfile,
  getStatusApi,
  changeStatusApi,
  changePhotoApi,
  changeProfileInfoApi,
} from "../api";
import { stopSubmit } from "redux-form";
import { InitialStateType, PhotoType, ProfileType, ThunkType } from "../types/profileReducerTypes";
import { ActionType } from "./redux-store";

let initialState: InitialStateType = {
  posts: [
    { text: "Hi", user: "egor" },
    { text: "Nice to meet you", user: "egor" },
  ],
  profile: {} as ProfileType,
  status: "",
};

export function profileReducer(
  state = initialState,
  action: ReturnType<ActionType<typeof actionsProfileReducer>>
): InitialStateType {
  switch (action.type) {
    case "ADD_NEW_POST": {
      return {
        ...state,
        posts: [...state.posts, { user: "egor", text: action.post }],
      };
    }
    case "CHANGE_PHOTO": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo },
      };
    }
    case "SET_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "GET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
}

export const actionsProfileReducer = {
  addNewPostText: (post: string) =>
    ({
      type: "ADD_NEW_POST",
      post,
    } as const),
  setProfile: (profile: ProfileType) =>
    ({
      type: "SET_PROFILE",
      profile,
    } as const),
  getStatus: (status: string) =>
    ({
      type: "GET_STATUS",
      status,
    } as const),
  changePhotoAC: (photo: PhotoType) =>
    ({
      type: "CHANGE_PHOTO",
      photo,
    } as const),
};

export const getProfileThunk = (id: number): ThunkType => {
  return (dispatch) => {
    getProfile(id).then((value) => {
      dispatch(actionsProfileReducer.setProfile(value));
    });
  };
};

export const getStatusThunk = (id: number): ThunkType => {
  return (dispatch) => {
    getStatusApi(id).then((value) => {
      if (value.status === 200) dispatch(actionsProfileReducer.getStatus(value.data));
    });
  };
};

export const setStatusThunk = (status: string): ThunkType => {
  return (dispatch) => {
    changeStatusApi(status).then((value) => {
      if (value.resultCode === 0) dispatch(actionsProfileReducer.getStatus(status));
    });
  };
};

export const changePhotoThunk = (photo: File): ThunkType => {
  return (dispatch) => {
    changePhotoApi(photo).then((value) => {
      if (value.resultCode === 0) dispatch(actionsProfileReducer.changePhotoAC(value.data.photos));
    });
  };
};

export const changeProfileThunk = (data: ProfileType): ThunkType => {
  return async (dispatch) => {
    let value = await changeProfileInfoApi(data);
    if (value.resultCode === 0) {
      dispatch(getProfileThunk(data.userId));
    } else {
      dispatch(stopSubmit("editInfo", { _error: value.messages[0] }));
      return Promise.reject(value.messages[0]);
    }
  };
};
