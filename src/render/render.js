import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

import state from '.././state/state';
import { newpost } from '.././state/state';
import { newmessage } from '.././state/state';


export let renderApp = () => {
    ReactDOM.render(
      
        <App state = {state} newpost = {newpost} newmessage= {newmessage}/>,
      document.getElementById('root')
    )};