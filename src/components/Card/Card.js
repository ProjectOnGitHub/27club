import React, { useState } from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({ card, name, dates, link }) {
  const [hoverCard, setHoverCard] = useState(false);

  function handleMouseEnter() {
    setHoverCard(true);
  }

  function handleMouseLeave() {
    setHoverCard(false);
  }

  function handleEnter() {
    handleMouseEnter(card, hoverCard);
  }

  function handleLeave() {
    handleMouseLeave(card);
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


