const actionNewMessage = "NEW-MESSAGE";
const actionChangeMessagePost = "CHANGE-MESSAGE";

let messagePage = {
    dialogs: [
        { name: "Egor", id: "1", },
        { name: "Oleg", id: "2", },
        { name: "Misha", id: "3", },
        { name: "Sasha", id: "4", },
      ],
      dialogsItem: [
        { content: "Hi", },
        { content: "My name", },
        { content: "I'm from Belarus", },
      ],
      firstMessage: '',
};

const messageReducer = (state = messagePage, action) => {
    
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

export const newMessageAction = () => {
    return { type: actionNewMessage }
};
export const newMessageChangeAction = (text) => {
    return { type: actionChangeMessagePost, text: text, }
};

export default messageReducer;