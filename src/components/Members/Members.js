import React from 'react';
import './Members.css';
import { initialCards } from "../../utils/cards";

function Members() {

  return (
    <section className="members" id="members">
      <ul className="members-cards__list">
        {initialCards.map(({ link, name }) => (
          <li className="members-cards__list-item" key={name}>
            <h3 className="members-cards__title">{name}</h3>
            <img className="members-cards__image" src={link} alt={name} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Members;



