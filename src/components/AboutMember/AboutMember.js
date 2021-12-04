import React, { useEffect } from 'react';
import Helmet from "react-helmet";
import './AboutMember.css';

function AboutMember({ name, location, url, image, text }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      {location.pathname === `/${url}` ? (
        <>
          <Helmet title={name} />
          <section className="about">
            <article className="about__info section" >
              <h1 className="about__title">{name}</h1>
              <img className="about__photo" src={image} alt={name} />
              {text.map((item, i) => {
                return (
                  <p className="about__text" key={i + 1}>{item}</p>
                )
              })}
            </article>
          </section>
        </>
      ) : (
        ''
      )
      }
    </>
  );
}

export default AboutMember;



