import React from 'react';
import './Card.css';
import { initialCards } from "../../utils/cards";

function Card({ handleMouseEnter, handleMouseLeave, hoverCard }) {

  return (

    initialCards.map(({ link, name, dates, id }) => (
      <li className="members-cards__list-item" key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {!hoverCard ? (
          <h3 className="members-cards__title">{name}</h3>
        ) : (
          <h4 className="members-cards__subtitle">{dates}</h4>
        )}
        <img className="members-cards__image" src={link} alt={name} />
      </li>
    ))

  );
}

export default Card;



