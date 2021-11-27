import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
            <NavLink exact to="/" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Роберт Джонсон
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink exact to="/" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Брайан Джонс
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink exact to="/jimi-hendrix" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Джими Хендрикс
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink exact to="/" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Дженис Джоплин
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink exact to="/" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Джим Моррисон
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink exact to="/" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Курт Кобейн
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink exact to="/" activeClassName="header__menu-link_active" className="header__menu-link hover-effect">
              Эми Уайнхаус
            </NavLink>
          </li>
        </>
      )
      }
    </ul>
  );
}

export default HeaderMenu;



