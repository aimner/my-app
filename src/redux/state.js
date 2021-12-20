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
  subscribe(observer) {
    this.callSubs = observer; 
    // () => {let state = store.getState();renderApp(state);
  },
  callSubs() {
    alert("kak dela")
  },
  dispatch(action) {  
    
    this._state.profilePage = postsReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    
    
    this.callSubs(this._state); // redux не умеет передавать state при его изменении, (this.callSubs() - так происходит в redux)
                                // поэтому в observer мы передаем анонимную стрелочную функцию, которая сможет получить state и вызвать renderApp
    },
  };


export default store;