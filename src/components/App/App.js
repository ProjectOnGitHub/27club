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
  useEffect(() => {
    const data = initialCards.map((item) => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        url: item.url,
        dates: item.dates,
      }
    })
    console.log(data);
    setCards(data);
  }, []);

  const history = useHistory();
  function handleGoBack() {
    history.goBack();
  }




  return (
    <div className="app">
      <Header
        exact path={["/", "/jimi-hendrix"]}
        cards={cards}
      />
      <Switch>
        <Route exact path="/">
          <Helmet
            title="Клуб 27"
          />
          <Main
            cards={cards} />
        </Route>
        <Route
          exact path="/:id"
        >
          <Main
            cards={cards}
          />
        </Route>
        <Route>
          <Helmet
            title="Страница не найдена"
          />
          <PageNotFound
            path="*"
            handleGoBack={handleGoBack}
          />
        </Route>
      </Switch>
      <Footer
        exact path={["/", "/jimi-hendrix"]}
      />
    </div >
  );
}

export default App;
