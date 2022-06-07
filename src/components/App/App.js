import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Helmet from "react-helmet"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import './App.css';
import { initialCards } from '../../utils/cards';

function App() {

  const [cards, setCards] = useState([]);


  useEffect(() => {
    const data = initialCards.map((item) => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        url: item.url,
        dates: item.dates,
        text: item.text,
      }
    })
    setCards(data);
  }, []);


  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Helmet title="Клуб 27" />
          <Main cards={cards} />
          <Footer />
        </Route>
        <Route exact path={cards.map(card => `/${card.url}`)}>
          <Header cards={cards} />
          <Main cards={cards} />
          <Footer />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
