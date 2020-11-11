import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import logo from '../../assets/img/navbar/logo.png';
import revenueBro from '../../assets/img/navbar/revenue-bro.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCoins,
  faUsers,
  faHistory,
  faUserTie,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <p className="navbar__logo-text">NeoFin</p>
          <img className="navbar__logo-image" src={logo} alt="logo image" />
        </Link>
        <Link to="/" className="navbar__row active" href="#">
          <FontAwesomeIcon icon={faHome} className="navbar__row-img" fixedWidth />
          <p className="navbar__row-text">Главная</p>
        </Link>
        <Link to="/balance" className="navbar__row" href="#">
          <FontAwesomeIcon icon={faCoins} className="navbar__row-img" fixedWidth />
          <p className="navbar__row-text">Счета</p>
        </Link>
        <Link to="/users" className="navbar__row" href="#">
          <FontAwesomeIcon icon={faUsers} className="navbar__row-img" fixedWidth />
          <p className="navbar__row-text">Пользователи</p>
        </Link>
        <Link to="/history" className="navbar__row" href="#">
          <FontAwesomeIcon icon={faHistory} className="navbar__row-img" fixedWidth />
          <p className="navbar__row-text">История</p>
        </Link>
        <Link to="/contractors" className="navbar__row" href="#">
          <FontAwesomeIcon icon={faUserTie} className="navbar__row-img" fixedWidth />
          <p className="navbar__row-text">Контрагенты</p>
        </Link>
        <Link to="/departments" className="navbar__row" href="#">
          <FontAwesomeIcon icon={faThLarge} className="navbar__row-img" fixedWidth />
          <p className="navbar__row-text">Отделы</p>
        </Link>

        <div className="navbar__block">
          <img className="navbar__block-img" src={revenueBro} />
          <a href="#">
            <button className="navbar__block-button">Совершить транзакцию</button>
          </a>
          <p className="navbar__block-text">
            В пару кликов совершить такие операции, как расход, доход или перевод денег
          </p>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
