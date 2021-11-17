import React from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({ card, onMouseEnter, onMouseLeave, hoverCard, name, dates, link }) {

  function handleEnter(e) {
    e.stopPropagation();
    onMouseEnter(card);
    console.log(card);
  }

  function handleLeave(e) {
    e.stopPropagation();
    onMouseLeave(card);
    console.log(card);

  }

  return (
    <li className="members-cards__list-item" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {!hoverCard ? (
        <h3 className="members-cards__title">{name}</h3>
      ) : (
        <h4 className="members-cards__subtitle">{dates}</h4>
      )}
      <img className="members-cards__image" src={link} alt={name} />
    </li>

  );
}

export default Card;



