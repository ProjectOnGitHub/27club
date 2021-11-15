import React from 'react';
import Promo from "../Promo/Promo";
import About from "../About/About";
import Members from "../Members/Members";
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Promo />
      <Members />
      <About />
    </main>
  );
}

export default Main;