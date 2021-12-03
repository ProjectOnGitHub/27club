import React from 'react';
import './Members.css';
import Card from '../Card/Card';

function Members({ cards }) {

  return (
    <section className="members" id="members">
      <ul className="members-cards__list">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              name={card.name}
              image={card.image}
              dates={card.dates}
              url={card.url}
              card={card}
            />
          )
        })}
      </ul>
    </section >
  );
}

export default Members;
