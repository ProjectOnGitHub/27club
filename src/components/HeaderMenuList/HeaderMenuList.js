import React from 'react';
import { NavLink } from 'react-router-dom';
//import './HeaderMenuList.css';


function HeaderMenuList({ name, url }) {

  return (
    <li className="header__menu-item">
      <NavLink
        exact to={url}
        activeClassName="header__menu-link_active"
        className="header__menu-link hover-effect">
        {name}
      </NavLink>
    </li>
  );
}

export default HeaderMenuList;



