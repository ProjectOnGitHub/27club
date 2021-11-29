import React, { useEffect } from 'react';
import Helmet from "react-helmet"
//import './AboutMember.css';

function AboutMember({ name, location, url, image }) {
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
              <img src={image} alt={name} />
            </article>
          </section>
        </>
      ) : (
        ""
      )
      }
    </>
  );
}

export default AboutMember;



