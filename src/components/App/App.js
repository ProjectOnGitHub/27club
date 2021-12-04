import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Helmet from "react-helmet"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import { initialCards } from '../../utils/cards';

function App() {

  const [cards, setCards] = useState([]);
  const history = useHistory();

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
    console.log(data);
    setCards(data);
  }, []);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Helmet title="Клуб 27" />
          <Main cards={cards} />
          <Footer />
        </Route>
        <Route exact path={
          ["/robert-johnson",
            "/brian-jones",
            "/jimi-hendrix",
            "/janis-joplin",
            "/jim-morrison",
            "/kurt-cobain",
            "/amy-winehouse",
          ]}>

        <Route exact path={
      ["/robert-johnson",
        "/brian-jones",
        "/jimi-hendrix",
        "/janis-joplin",
        "/jim-morrison",
        "/kurt-cobain",
        "/amy-winehouse",
      ]}>
        <Header cards={cards} />
        <Main cards={cards} />
        <Footer />
        </Route>
        <Route path="*">
        <Helmet title="Страница не найдена" />
        <PageNotFound handleGoBack={handleGoBack} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
