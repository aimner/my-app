import { PhotoType } from "./profileReducerTypes"
import { UserType } from "./usersReducerType"

enum ResultCode {
    Successfully = 0,
    Unsuccessful = 1
}

export type GetUsersType = {
    error: string | null
    totalCount: number
    items: Array<UserType>
}

export type FollowOrUnFollowUserApiType = {
    data: {}
    messages: string[]
    resultCode: ResultCode
}

export type AuthMeApiType = {
    resultCode: ResultCode
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}

export type ChangeStatusApi = FollowOrUnFollowUserApiType & {
    fieldsErrors: any[]
}

export type LoginApiType = {
    resultCode: ResultCode
    messages: string[]
    data: {
        userId: number
    }
}

export type LogoutApiType = ChangeStatusApi

export type ChangePhotoApiType = {
    resultCode: ResultCode
    messages: string[]
    data: {
        photos: PhotoType
    }
}

export type ChangeProfileInfoApiType = FollowOrUnFollowUserApiType

