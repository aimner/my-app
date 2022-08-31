const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

let initialState = {
    users: [
        { name: 'sasha' },
        { name: 'egor' },
        { name: 'artem' },
        { name: 'oleg' },
        { name: 'misha' },
        { name: 'dima' }
    ],
    messages: [
        { text: 'Hi', user: 'egor' },
        { text: 'How are you?', user: 'egor' },
    ],
    newMessage: {
        text: '',
        user: 'egor'
    }
}


export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessage: { text: action.text, user: state.newMessage.user} 
            }
        }
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {user: state.newMessage.user, text: state.newMessage.text}],
                newMessage: { text: '', user: state.newMessage.user} 
            }
        }
        default:
            return state
    }
}

export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, text });

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });


