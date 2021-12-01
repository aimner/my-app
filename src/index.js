import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




export let renderApp = (state) => {
  
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>,
    document.getElementById('root')
  )
};

renderApp(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderApp(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
