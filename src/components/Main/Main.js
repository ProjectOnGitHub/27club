import React from 'react';
import { useLocation } from 'react-router-dom';
import Promo from "../Promo/Promo";
import About from "../About/About";
import AboutMember from '../AboutMember/AboutMember';
import Members from "../Members/Members";
import './Main.css';

function Main({ cards }) {

  const location = useLocation();

  return (
    <main className="main">
      {location.pathname !== '/' ? (
        cards.map(item => {
          return (
            <>
              <AboutMember
                key={item.id}
                name={item.name}
                url={item.url}
                image={item.image}
                text={item.text}
                location={location}
              />
            </>

          )
        })
      ) : (
        <>
          <Promo />
          <Members
            cards={cards}
          />
          <About
            name="О клубе"
            anchor="about"
          />
        </>
      )}
    </main>
  );
}

export default Main;