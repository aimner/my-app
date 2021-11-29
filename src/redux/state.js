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
  // newPost () {
  //   let textPost = {content: this._state.profilePage.firstPost,};
  //   this._state.profilePage.posts.push(textPost);
  //   this._state.profilePage.firstPost = "";
  //   this.renderApp(this._state);
  // },
  // newMessage() {
  //   let textMessage = { content: this._state.messagePage.firstMessage, };
  //   this._state.messagePage.dialogsItem.push(textMessage);
  //   this._state.messagePage.firstMessage = "";
  //   this.renderApp(this._state);
  // },
  // changePost (text) {
  //   this._state.profilePage.firstPost = text;
  //   this.renderApp(this._state);
  // },
  // changeMessage(text) {
  //   this._state.messagePage.firstMessage = text;
  //   this.renderApp(this._state);
  // },
  call(observer) {
    this.renderApp = observer;
  },
  renderApp() {
    alert("kak dela")
  },
  dispatch(action) {
    // debugger
    // if (action.type === "NEW-POST") {
    //   let textPost = {content: this._state.profilePage.firstPost,};
    //   this._state.profilePage.posts.push(textPost);
    //   this._state.profilePage.firstPost = "";
    //   this.renderApp(this._state);
    // } else if (action.type === "CHANGE-POST") {
    //   this._state.profilePage.firstPost = action.text;
    //   this.renderApp(this._state);
    // }
    switch (action.type) {
      case ("NEW-POST"):
        let textPost = { content: this._state.profilePage.firstPost, };
        this._state.profilePage.posts.push(textPost);
        this._state.profilePage.firstPost = "";
        this.renderApp(this._state);
        break;
      case ("CHANGE-POST"):
        this._state.profilePage.firstPost = action.text;
        this.renderApp(this._state);
        break;
      case ("NEW-MESSAGE"):
        let textMessage = { content: this._state.messagePage.firstMessage, };
        this._state.messagePage.dialogsItem.push(textMessage);
        this._state.messagePage.firstMessage = "";
        this.renderApp(this._state);
        break;
      case ("CHANGE-MESSAGE"):
        this._state.messagePage.firstMessage = action.text;
        this.renderApp(this._state);
        break;
      default:
        alert("шото не так");
    }
  }
};



export default store;