import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.png';
import './Header.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';




function Header({ cards }) {
  const location = useLocation();
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })



  return (
    <header className="header">
      <nav className="header__navigation section">
        <Link to="/" className="header__link hover-effect">
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        {location.pathname === '/'
          ? <HeaderMenu cards={cards} />
          : isMobile
            ? <BurgerMenu cards={cards} />
            : <HeaderMenu cards={cards} />
        }
      </nav>
    </header >
  );
}

export default Header;



