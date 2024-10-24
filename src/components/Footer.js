// function Footer()
// {
//     return(
//         <>
//         <div>footer</div>
//         </>
//     )
// }
// export default Footer
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-logo-address">
        <h2 className="footer-title">RENTCARS</h2>
        <address>
          25566 Hc 1, Glenallen, Alaska, 99588, USA<br />
          <span className="footer-phone">+603 4784 273 12</span><br />
          <a href="mailto:rentcars@gmail.com" className="footer-email">rentcars@gmail.com</a>
        </address>
      </div>

      <div className="footer-column">
        <h3>Our Product</h3>
        <ul>
          <li>Career</li>
          <li>Car</li>
          <li>Packages</li>
          <li>Features</li>
          <li>Priceline</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>Download</li>
          <li>Help Centre</li>
          <li>Guides</li>
          <li>Partner Network</li>
          <li>Cruises</li>
          <li>Developer</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>About Rentcars</h3>
        <ul>
          <li>Why choose us</li>
          <li>Our Story</li>
          <li>Investor Relations</li>
          <li>Press Center</li>
          <li>Advertise</li>
        </ul>
      </div>

      <div className="footer-follow">
        <h3>Follow Us</h3>
        <div className="footer-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;