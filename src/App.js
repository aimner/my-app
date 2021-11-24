import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import Music from './components/Music/Music';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';




function App(props) {





  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="Main">
          <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} newpost={props.newpost}/>} />
          <Route path="/message" render={() => <Message messagePage={props.state.messagePage} newmessage={props.newmessage} />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
