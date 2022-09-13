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

}


export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {

            return {
                ...state,
                messages: [...state.messages, {user:"egor", text: action.message}],
            }
        }
        default:
            return state
    }
}

export const addNewMessageActionCreator = (message) => ({ type: ADD_NEW_MESSAGE, message });


