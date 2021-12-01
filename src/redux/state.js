import messageReducer from './Messagesreducer';
import postsReducer from './Postsreducer';

const store = {
  _state: {
    messagePage: {
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

    },
    profilePage: {
      posts: [
        { content: 'Hi, my name Egor', },
        { content: "i'm from Belarus", },
      ],
      firstPost: '',
    }
  },
  getState() {
    return this._state
  },
  call(observer) {
    this.renderApp = observer;
  },
  renderApp() {
    alert("kak dela")
  },
  dispatch(action) {  
    
    this._state.profilePage = postsReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    
    
    this.renderApp(this._state);
    },
  };
//     switch (action.type) {
//       case ("NEW-POST"):
//         let textPost = { content: this._state.profilePage.firstPost, };
//         this._state.profilePage.posts.push(textPost);
//         this._state.profilePage.firstPost = "";
//         this.renderApp(this._state);
//         break;
//       case ("CHANGE-POST"):
//         this._state.profilePage.firstPost = action.text;
//         this.renderApp(this._state);
//         break;
//       case ("NEW-MESSAGE"):
//         let textMessage = { content: this._state.messagePage.firstMessage, };
//         this._state.messagePage.dialogsItem.push(textMessage);
//         this._state.messagePage.firstMessage = "";
//         this.renderApp(this._state);
//         break;
//       case ("CHANGE-MESSAGE"):
//         this._state.messagePage.firstMessage = action.text;
//         this.renderApp(this._state);
//         break;
//       default:
//         alert("шото не так");
//     }
//   },
// }

// export const newPostAction = () => {
//   return {type: actionNewPost}
// };
// export const newPostChangeAction = (text) => {
//   return {type: actionChangeNewPost, text: text}
// };
// export const newMessageAction = () => {
//   return {type: actionNewMessage}
// };
// export const newMessageChangeAction = (text) => {
//   return {type: actionChangeMessagePost, text: text,}
// };

export default store;