import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenuList.css';


function BurgerMenuList({ name, url }) {

  return (
    <li className="burger__menu-item">
      <NavLink
        exact to={url}
        activeClassName="burger__menu-link_active"
        className="burger__menu-link hover-effect">
        {name}
      </NavLink>
    </li>
  );
}

export default BurgerMenuList;



