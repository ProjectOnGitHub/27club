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
      {location.pathname !== '/' ? (
        cards.map(item => {
          return (
            <>
              <About
                key={item.id}
                name={item.name}
                url={item.url}
                image={item.image}
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
            location={location}

          />
        </>
      )}
    </main>
  );
}

export default Main;