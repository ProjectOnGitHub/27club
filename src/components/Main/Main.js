import React from 'react';
import Promo from "../Promo/Promo";
import About from "../About/About";

import './Main.css';

function Main() {
  return (
    <main className="main">
      <Promo />
      <About />
    </main>
  );
}

export default Main;