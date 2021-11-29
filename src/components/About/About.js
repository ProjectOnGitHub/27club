import React, { useEffect } from 'react';
//import Helmet from "react-helmet"
import './About.css';

function About({ name, location, url, image, anchor }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      {location.pathname === `/${url}` ? (
        <section className="about">
          <article className="about__info section" >
            <h1 className="about__title">{name}</h1>
            <img src={image} alt={name} />
          </article>
        </section>

      ) : (
        <section className="about" id={anchor}>
          <article className="about__info section" >
            <h2 className="about__title">{name}</h2>
            <p className="about__text">Клуб 27 — объединённое название влиятельных музыкантов, умерших в возрасте 27 лет, иногда при странно сложившихся обстоятельствах.</p>
            <p className="about__text">Первым в списке из семи музыкантов оказался Роберт Джонсон (по утверждению критиков). В список также вошли Джими Хендрикс, Джим Моррисон и Дженис Джоплин. Самой главной деталью их смерти, которая и послужила толчком к созданию Клуба, является то, что они умерли за промежуток времени продолжительностью в 10 месяцев.</p>
            <p className="about__text">Позже в список был включён Брайан Джонс; при этом Моррисон и Джонс умерли в один день, но с разницей в два года.</p>
            <p className="about__text">Затем в Клуб был включён Курт Кобейн, застрелившийся в 1994 году на пике популярности.</p><p className="about__text">После смерти в 2011 году британской певицы Эми Уайнхаус её причислили к Клубу многие издания.</p>
          </article>
        </section>
      )
      }
    </>

  );
}

export default About;



