import * as axios from "axios";


const initialApi = axios
    .create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "784607ea-0326-4dd9-9d51-53620fc3da2d"
        }
    })

export const getUsers = (currentPage, usersCount) => {
    return initialApi
        .get(
            `users?page=${currentPage}&count=${usersCount}`,
        )
}

export const getProfile = (userId) => {
    return initialApi
        .get(
            `profile/${userId}`,
        )
}

export const unFollowUserApi = (id) => {
    return initialApi
        .delete(
            `follow/${id}`)
}

export const followUserApi = (id) => {
    return initialApi
        .post(
            `follow/${id}`)
}

export const authMeApi = () => {
    return initialApi.get(
        'auth/me')
}

export const getStatusApi = (id) => {
    return initialApi.get(`profile/status/${id}`)
}

export const changeStatusApi = (status) => {
    return initialApi.put(`profile/status`, {status})
}

export const loginApi = (email, password, rememberMe) => {
    return initialApi.post(`auth/login`, {email, password, rememberMe})
}

export const logoutApi = () => {
    return initialApi.delete(`auth/login`)
}