import React from 'react';
import BurgerMenuList from '../BurgerMenuList/BurgerMenuList';
//import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';


function BurgerMenu({ cards, onClose, isOpen, onBurgerMenuClick }) {

  return (
    <>
      {isOpen ?
        (
          <button
            className="burger__menu-button burger__menu-button_close hover-effect"
            type="button"
            aria-label="Скрыть меню"
            aria-controls="menu"
            onClick={onClose} />
        ) : (
          <button
            className="burger__menu-button burger__menu-button_open hover-effect"
            type="button"
            aria-label="Показать меню"
            aria-controls="menu"
            onClick={onBurgerMenuClick} />
        )}
      <ul className={`burger__menu ${isOpen && 'burger__menu_opened'}`}>
        {cards.map(card => {
          return (
            <BurgerMenuList
              key={card.id}
              name={card.name}
              image={card.image}
              url={card.url}
              onClose={onClose}
            />
          )
        })}
      </ul>
    </>
  );
}

export default BurgerMenu;
