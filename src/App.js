import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import { Main } from './components/Main/Main';
import { BrowserRouter} from "react-router-dom";






const App = () => {
  return (
    <BrowserRouter>
      <div className={`${classes.container}`}>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App;


