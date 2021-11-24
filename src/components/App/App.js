import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Helmet from "react-helmet"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  const history = useHistory();
  function handleGoBack() {
    history.goBack();
  }


  return (
    <div className="app">
      <Header
        exact path={["/", "/jimi-hendrix"]}
      />
      <Switch>
        <Route exact path="/">
          <Helmet
            title="Клуб 27"
          />
          <Main />
        </Route>
        <Route path="/jimi-hendrix">
          <Helmet
            title="Джими Хендрикс"
          />
          <Main />
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
        exact path={["/"]}
      />
    </div>
  );
}

export default App;
