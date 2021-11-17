import React, { useState, useEffect } from 'react';
import './Members.css';
import { initialCards } from '../../utils/cards';
import Card from '../Card/Card';

function Members() {

  const [cards, setCards] = useState([]);
  const [hoverCard, setHoverCard] = useState(false);

  useEffect(() => {
    const data = initialCards.map((item) => {
      return {
        id: item.id,
        name: item.name,
        link: item.link,
        dates: item.dates,
      }
    })
    console.log(data);
    setCards(data);
  }, []);

  function handleMouseEnter() {
    setHoverCard(true);
  }

  function handleMouseLeave() {
    setHoverCard(false);
  }

  return (
    <section className="members" id="members">
      <ul className="members-cards__list">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              name={card.name}
              link={card.link}
              dates={card.dates}
              card={card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              hoverCard={hoverCard}
            />
          )
        })}
      </ul>
    </section >
  );
}

export default Members;



