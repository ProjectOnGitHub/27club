import React from 'react';
import HeaderMenuList from '../HeaderMenuList/HeaderMenuList';
import './HeaderMenu.css';

function HeaderMenu({ cards, isMobile }) {

  return (
    <ul className="header__menu">
      {location.pathname === "/" ? (
        <>
          <li className="header__menu-item">
            <a href="#members" className={`header__menu-link  ${isMobile ? '' : 'hover-effect'}`}>
              Участники
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#about" className={`header__menu-link  ${isMobile ? '' : 'hover-effect'}`}>
              О клубе
            </a>
          </li>
        </>
      ) : (
        cards.map(card => {
          return (
            <HeaderMenuList
              key={card.id}
              name={card.name}
              image={card.image}
              url={card.url}
            />
          )
        })
      )}
    </ul>
  );
}

export default HeaderMenu;
