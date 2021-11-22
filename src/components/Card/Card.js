import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({ card, name, dates, image }) {
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
    <Link to="/jimi-hendrix" className="members-cards__list-link">
      <li className="members-cards__list-item" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {!hoverCard ? (
          <h3 className="members-cards__title">{name}</h3>
        ) : (
          <>
            <h4 className="members-cards__subtitle">{dates}</h4>
          </>
        )}
        <img className="members-cards__image" src={image} alt={name} />

      </li>
    </Link>
  );
}

export default Card;



