import { getProfile, getStatusApi, changeStatusApi} from "../api"


const ADD_NEW_POST = "ADD-NEW-POST"
const SET_PROFILE = "SET_PROFILE"
const GET_STATUS = "GET_STATUS"


let initialState = {
    posts: [
        { text: 'Hi', user: 'egor' },
        { text: 'Nice to meet you', user: 'egor' },
    ],
    profile: {

    },
    status: ''
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                posts: [...state.posts, { user: 'egor', text: action.post}],

            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}

export const addNewPostText = (post) => ({ type: ADD_NEW_POST, post });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const getStatus = (status) => ({ type: GET_STATUS, status });


export const getProfileThunk = (id) => {
    return (dispatch) => {
        getProfile(id)
            .then((value) => {
                dispatch(setProfile(value.data));
            });
    }
}

export const getStatusThunk = (id) => {
    return (dispatch) => {
        getStatusApi(id)
            .then((value) => {
                if(value.status === 200) dispatch(getStatus(value.data));
            });
    }
}
export const setStatusThunk = (status) => {
    return (dispatch) => {
        changeStatusApi(status)
            .then((value) => {
                if(value.status === 200) dispatch(getStatus(status))
            });
    }
}

