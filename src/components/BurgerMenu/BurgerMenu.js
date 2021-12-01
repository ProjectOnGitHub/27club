import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';


function BurgerMenu{ (isOpen) } {

  return (
    <>
      {isOpen ?
        (
          <button className="burger__menu-button burger__menu-button_close hover-effect" type="button" aria-label="Скрыть меню" aria-controls="menu" onClick={props.onClose} />
        ) : (
          <button className="burger__menu-button burger__menu-button_open hover-effect" type="button" aria-label="Показать меню" aria-controls="menu" onClick={props.onBurgerMenuClick} />
        )}
      <li className="burger__menu-item">
        <NavLink to="/movies" activeClassName="burger__menu-link_active" onClick={props.onClose} className="burger__menu-link hover-effect">Фильмы</NavLink>
      </li>

    </>
  );
}

export default BurgerMenu;
