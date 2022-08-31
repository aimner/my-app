const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    // users: [
    //     { id: 1, avatar: 'https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1', follow: false, name: 'Oleg', city: 'Grodno', country: 'Belarus' },
    //     { id: 2, avatar: 'https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1', follow: false, name: 'Sasha', city: 'Minsk', country: 'Belarus' },
    //     { id: 3, avatar: 'https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1', follow: false, name: 'Misha', city: 'Batumi', country: 'Georgia' },
    // ]
}



export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(item => {
                    if (action.id === item.id) {
                        item.follow = true
                    }
                    return item
                })
            }
        case UNFOLLOW:
            return {
                users: state.users.map(item => {
                    if (action.id === item.id) {
                        item.follow = false
                    }
                    return item
                })
            }
        case SET_USERS: {
            return {
               users: action.users.map(item => item)
            }
        }
        default:
            return state
    }
}

export const followActionCreator = (id) => ({ type: FOLLOW, id })
export const unFollowActionCreator = (id) => ({ type: UNFOLLOW, id })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
