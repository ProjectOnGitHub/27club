import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../images/logo.png';
import './Header.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useMediaQuery } from 'react-responsive';



function Header({ cards }) {
  let location = useLocation();

  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })

  return (
    <header className="header">
      <nav className="header__navigation section">
        <Link to="/" className="header__link hover-effect">
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        <ul className="header__menu">
          {location.pathname === "/" ? (
            <>
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
            </>
          ) : (
            cards.map(card => {
              if (isMobile) {
                return (
                  console.log("бургер меню")
                )
              }
              return (
                <HeaderMenu
                  key={card.id}
                  name={card.name}
                  image={card.image}
                  url={card.url}
                />
              )
            })
          )
          }
        </ul>
      </nav>
    </header >
  );
}

export default Header;



