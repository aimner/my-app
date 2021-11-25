let renderApp = () => {
  alert("kak dela")
};

let state = {
  messagePage: {
    dialogs: [
      {name: "Egor",  id:"1",},
      {name: "Oleg",  id:"2",},
      {name: "Misha", id:"3",},
      {name: "Sasha", id:"4",},
    ],
    dialogsItem: [
      {content:"Hi",},
      {content:"My name",},
      {content:"I'm from Belarus",},
    ], 
    firstMessage: '',

  },
  profilePage: {
    posts: [
      {content: 'Hi, my name Egor',},
      {content: "i'm from Belarus",},
    ],
    firstPost: '',
  }
};

export const newPost = () => {
  let textPost = {content: state.profilePage.firstPost,};
  state.profilePage.posts.push(textPost);
  state.profilePage.firstPost = "";
  renderApp(state);
 
};

export const newMessage = (text) => {
  let textMessage = {content: state.messagePage.firstMessage,};
  state.messagePage.dialogsItem.push(textMessage);
  state.messagePage.firstMessage = "";
  renderApp(state);
};

export const changePost = (text) => {
  state.profilePage.firstPost = text;
  console.log(state.profilePage.firstPost);
  
  renderApp(state);
}

export const changeMessage = (text) => {
  state.messagePage.firstMessage = text;
  console.log(state.messagePage.firstMessage);
  renderApp(state);
}

export const call = (observer) => {
  renderApp = observer;
}

export default state;