import React from 'react';
import Helmet from "react-helmet"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="app">
      <Helmet
        title="Клуб 27"
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
