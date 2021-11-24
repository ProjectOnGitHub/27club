import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderMenu.css';


function HeaderMenu() {
  let location = useLocation();

  return (
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
        <>
          <li className="header__menu-item">
            <Link to="/" className="header__menu-link hover-effect">
              Ссылка
            </Link>
          </li>
        </>
      )
      }
    </ul>
  );
}

export default HeaderMenu;



