import React from 'react';
import './Card.css';
import { initialCards } from "../../utils/cards";

function Card({ handleMouseEnter, handleMouseLeave, hoverCard }) {

  return (

    initialCards.map(({ link, name, dates, id }) => (
      <li className="members-cards__list-item" key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3 className="members-cards__title">{name}</h3>
        {hoverCard ? console.log(id) : console.log(name)}
        <img className="members-cards__image" src={link} alt={name} />
        <h4 className="members-cards__subtitle card_hovered">{dates}</h4>
      </li>
    ))

  );
}

export default Card;



