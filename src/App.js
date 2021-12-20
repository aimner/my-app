import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import MessageContainer from './components/Message/MessageContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';




function App(props) {
//  debugger;




  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="Main">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/message" render={() => <MessageContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
