import React from 'react';
import './Footer.css';

function Footer() {

  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__copyright  section">
        {currentYear} &#169; A V
      </div>
    </footer >
  );
}

export default Footer;
