import React from 'react';
import promoLogo from '../../images/promo-logo.png';
import './Promo.css';

function Promo() {

  return (
    <section className="promo">
      <h1 className="promo__title">Клуб 27</h1>
      <img className="promo__logo" src={promoLogo} alt="Логотип" />
    </section>
  );
}

export default Promo;
