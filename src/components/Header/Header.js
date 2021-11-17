import React from 'react';
import headerLogo from '../../images/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation section">
        <a href="/" className="header__link hover-effect">
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </a>
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="/#members" className="header__menu-link hover-effect">
              Участники
            </a>
          </li>
          <li className="header__menu-item">
            <a href="/#about" className="header__menu-link hover-effect">
              О клубе
            </a>
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default Header;



