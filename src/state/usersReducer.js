import { getUsers, unFollowUserApi, followUserApi } from './../api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const FOLLOW_BUTTON_STATE = 'FOLLOW_BUTTON_STATE'
const LOAD_FOLLOW = 'LOAD_FOLLOW'

const initialState = {
    // users: [
    //     { id: 1, avatar: 'https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1', follow: false, name: 'Oleg', city: 'Grodno', country: 'Belarus' },
    //     { id: 2, avatar: 'https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1', follow: false, name: 'Sasha', city: 'Minsk', country: 'Belarus' },
    //     { id: 3, avatar: 'https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1', follow: false, name: 'Misha', city: 'Batumi', country: 'Georgia' },
    // ]
    users: [],
    totalCount: 0,
    usersCount: 100,
    currentPage: 1,
    preload: false,
    loadFollowState: false,
    followId: [],
    count: 1
}



export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (action.id === item.id) {
                        item.followed = true
                    }
                    return item
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (action.id === item.id) {
                        item.followed = false
                    }
                    return item
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users.map(item => item)
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                preload: action.preload
            }
        }
        case FOLLOW_BUTTON_STATE: {
            return {
                ...state,
                followId: state.loadFollowState ? [...state.followId, action.id]
                    : [...state.followId.filter(id => id !== action.id)]
            }
        }
        case LOAD_FOLLOW: {
            return {
                ...state,
                loadFollowState: action.loadFollowState
            }
        }
        default:
            return state
    }
}

export const followUser = (id) => ({ type: FOLLOW, id })
export const unFollowUser = (id) => ({ type: UNFOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const changeCurrentPage = (currentPage) => ({ type: CHANGE_CURRENT_PAGE, currentPage })
export const setPreload = (preload) => ({ type: TOGGLE_PRELOADER, preload })
export const followButtonState = (id) => ({ type: FOLLOW_BUTTON_STATE, id })
export const loadFollow = (loadFollowState) => ({ type: LOAD_FOLLOW, loadFollowState })


export const userGetThunk = (currentPage, usersCount) => {
    return (dispatch) => {
        dispatch(setPreload(true));
        getUsers(currentPage, usersCount).then((value) => {
            dispatch(setUsers(value.data.items));
            dispatch(setTotalCount(value.data.totalCount));
            dispatch(setPreload(false));
        });
    }
}

export const userGetChangeCurrentPageThunk = (currentPage, usersCount) => {
    return (dispatch) => {
        dispatch(setPreload(true));
        getUsers(currentPage, usersCount).then((value) => {
            dispatch(setUsers(value.data.items));
            dispatch(setTotalCount(value.data.totalCount));
            dispatch(setPreload(false));
        });
        dispatch(changeCurrentPage(currentPage));
    }
}

export const followUserThunk = (id) => {
    return (dispatch) => {
        dispatch(loadFollow(true))
        dispatch(followButtonState(id))
        followUserApi(id)
            .then((value) => {
                if (value.data.resultCode === 0) {
                    dispatch(followUser(id));
                    dispatch(loadFollow(false))
                    dispatch(followButtonState(id));
                }
            });
    }
}

export const unFollowUserThunk = (id) => {
    return (dispatch) => {
        dispatch(loadFollow(true))
        dispatch(followButtonState(id))
        unFollowUserApi(id)
            .then((value) => {
                if (value.data.resultCode === 0) {
                    dispatch(unFollowUser(id));
                    dispatch(loadFollow(false))
                    dispatch(followButtonState(id));
                }
            });
    }
}