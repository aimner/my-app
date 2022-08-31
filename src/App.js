import React from 'react';
import classes from './App.module.scss';
import { Header } from './components/Header/Headers';
import { Main } from './components/Main/Main';






const App = (props) => {
  return (

    <div className={`${classes.container}`}>
        <Header />
        <Main store={props.store} />
    </div>
  )
}

export default App;


