import React, { useState } from 'react';
import './Members.css';
import Card from '../Card/Card';

function Members() {

  const [hoverCard, setHoverCard] = useState(false);

  function handleMouseEnter() {
    setHoverCard(true);
  }

  function handleMouseLeave() {
    setHoverCard(false);
  }

  return (
    <section className="members" id="members">
      <ul className="members-cards__list">
        <Card
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hoverCard={hoverCard}
        />
      </ul>
    </section >
  );
}

export default Members;



