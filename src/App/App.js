import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Navbar from '../components/Navbar/Navbar.js';

import Overview from '../pages/Overview/Overview';
import CurrentDate from '../components/CurrentDate';

import ProfilePhoto from '../assets/img/userPic.png';

function App() {
  function handleClick() {
    document.querySelector('.profile__dropdown').classList.toggle('active');
  }
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
      </Router>
      <div className="main">
        <div className="main__top">
          <div className="titleBlock">
            <p className="titleBlock__title">Главная</p>
            <p className="titleBlock__date">
              <CurrentDate />
            </p>
          </div>
          <div className="profile">
            <img className="profile__pic" src={ProfilePhoto} alt="user's picture" />
            <div className="profile__center" onClick={handleClick}>
              <div className="profile__info">
                <p className="profile__info-username">Санира Маджикова</p>
                <p className="profile__info-userwork">CEO Neobis</p>
                <div className="profile__dropdown">
                  <p className="profile__dropdown-password">
                    <i className="fas fa-lock"></i>Change password
                  </p>
                  <p className="profile__dropdown-signout">
                    <i className="fas fa-sign-out-alt"></i>Sign out
                  </p>
                </div>
              </div>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
