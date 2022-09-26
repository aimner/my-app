import axios from "axios";
import {
  GetUsersType,
  FollowOrUnFollowUserApiType,
  AuthMeApiType,
  ChangeStatusApi,
  LoginApiType,
  LogoutApiType,
  ChangePhotoApiType,
  ChangeProfileInfoApiType,
} from "./types/apiTypes";
import { ProfileType } from "./types/profileReducerTypes";

const initialApi = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "784607ea-0326-4dd9-9d51-53620fc3da2d",
  },
});

export const getUsers = (currentPage: number, usersCount: number) => {
  return initialApi
    .get<GetUsersType>(`users?page=${currentPage}&count=${usersCount}`)
    .then((value) => value.data);
};

export const getProfile = (userId: number) => {
  return initialApi.get<ProfileType>(`profile/${userId}`).then((value) => value.data);
};

export const unFollowUserApi = (id: number) => {
  return initialApi.delete<FollowOrUnFollowUserApiType>(`follow/${id}`).then((value) => value.data);
};

export const followUserApi = (id: number) => {
  return initialApi.post<FollowOrUnFollowUserApiType>(`follow/${id}`).then((value) => value.data);
};

export const authMeApi = () => {
  return initialApi.get<AuthMeApiType>("auth/me").then((value) => value.data);
};

export const getStatusApi = (id: number) => {
  return initialApi.get<string>(`profile/status/${id}`);
};

export const changeStatusApi = (status: string) => {
  return initialApi.put<ChangeStatusApi>(`profile/status`, { status }).then((value) => value.data);
};

export const loginApi = (email: string, password: string, rememberMe: boolean | undefined) => {
  return initialApi
    .post<LoginApiType>(`auth/login`, { email, password, rememberMe })
    .then((value) => value.data);
};

export const logoutApi = () => {
  return initialApi.delete<LogoutApiType>(`auth/login`).then((value) => value.data);
};

export const changePhotoApi = (photo: any) => {
  let formData = new FormData();
  formData.append("image", photo);
  return initialApi
    .put<ChangePhotoApiType>("/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((value) => value.data);
};

export const changeProfileInfoApi = (data: any) => {
  return initialApi.put<ChangeProfileInfoApiType>("/profile", data).then((value) => value.data);
};
