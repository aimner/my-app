import {renderApp} from '.././render/render'

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

  },
  profilePage: {
    posts: [
      {content: 'Hi, my name Egor',},
      {content: "i'm from Belarus",},

    ]
  }
};

export let newpost = (text) => {
  let textPost = {content: text,};
  state.profilePage.posts.push(textPost);
  renderApp();
};

export let newmessage = (text) => {
  let textMessage = {content: text,};
  state.messagePage.dialogsItem.push(textMessage);
  renderApp();
};

export default state;