const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

let initialState = {
    posts: [
        { text: 'Hi', user: 'egor' },
        { text: 'Nice to meet you', user: 'egor' },
    ],
    newPost: {
        text: '',
        user: 'egor',
    }
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                posts: [...state.posts, {text: state.newPost.text, user: state.newPost.user}],
                newPost: {text: '', user: state.newPost.user}
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPost: {text: action.text, user: state.newPost.user}
            }
        }
        default:
            return state
    }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST, text });

