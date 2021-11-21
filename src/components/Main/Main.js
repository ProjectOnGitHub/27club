import React from 'react';
import { useLocation } from 'react-router-dom';
import Promo from "../Promo/Promo";
import About from "../About/About";
import Members from "../Members/Members";
import './Main.css';

function Main() {

  const location = useLocation();

  return (
    <main className="main">
      {location.pathname === '/jimi-hendrix' ? (
        <Members />
      ) : (
        <>
          <Promo />
          <Members />
          <About />
        </>
      )}
    </main>
  );
}

export default Main;