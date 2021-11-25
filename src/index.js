import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { newPost, newMessage, changePost, changeMessage, call } from './state/state';



export let renderApp = (state) => {
    ReactDOM.render(
      
        <App state = {state} newpost = {newPost} newmessage= {newMessage} changepost={changePost} changemessage={changeMessage}/>,
      document.getElementById('root')
    )};

renderApp(state);
call(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
