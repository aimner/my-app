import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




export let renderApp = () => {
    ReactDOM.render(
        <App state = {store._state} newpost = {store.newPost.bind(store)} newmessage= {store.newMessage.bind(store)} changepost={store.changePost.bind(store)} changemessage={store.changeMessage.bind(store)}/>,
      document.getElementById('root')
    )};

renderApp(store.getState());
store.call(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
