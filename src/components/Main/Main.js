import React from 'react';
import { useLocation } from 'react-router-dom';
import Promo from "../Promo/Promo";
import About from "../About/About";
import Members from "../Members/Members";
import './Main.css';

function Main({ cards }) {

  const location = useLocation();

  return (
    <main className="main">
      {location.pathname === '/jimi-hendrix' ? (
        <About
          aboutTitle="Джими Хендрикс"
          cards={cards}
        />
      ) : (
        <>
          <Promo />
          <Members
            cards={cards}
          />
          <About
            aboutTitle="О клубе"
            ankor="about"
          />
        </>
      )}
    </main>
  );
}

export default Main;