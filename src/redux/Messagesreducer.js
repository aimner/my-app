const actionNewMessage = "NEW-MESSAGE";
const actionChangeMessagePost = "CHANGE-MESSAGE";

export const newMessageAction = () => {
    return { type: actionNewMessage }
};
export const newMessageChangeAction = (text) => {
    return { type: actionChangeMessagePost, text: text, }
};

const messageReducer = (state, action) => {
    
    switch (action.type) {
        case actionNewMessage:
            let textMessage = { content: state.firstMessage, };
            state.dialogsItem.push(textMessage);
            state.firstMessage = "";
            break;
        case actionChangeMessagePost:
            state.firstMessage = action.text;
            return state;
        default:
            return state;
    }
    return state;
};



export default messageReducer;