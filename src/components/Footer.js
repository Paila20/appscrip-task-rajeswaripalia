import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
     
      <div className="footer-top">
        <div className="footer-top-left">
          <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
          <p className="footer-description">Sign up for updates for Metta Muse</p>
          <div className="footer-subscribe">
            <input type="email" className="footer-input" placeholder="Enter your email" />
            <button className="footer-subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-top-right">
          <h2>CONTACT US</h2>
          <p>+44221 133 5340</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <div className='usd'>
            <img src="https://www.shutterstock.com/image-vector/usa-flag-button-on-white-260nw-181496654.jpg" alt="usd" className="payment-icon"/>
            <p className='usd-text'>USD</p>
          </div>
          <p>Transactions will be completed in Euros, with a currency reference available on hover.</p>
        </div>
      </div>
      
    
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h4>Metta Muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-bottom-middle">
          <h4>Quick Links</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer-bottom-right">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
          <h4>metta muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-pay-vector-PNG.png" alt="Google Pay"  className='payment-icon'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Visa" className='payment-icon' />
            <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" alt="PayPal"  className='payment-icon'/>
            <img src="https://logowik.com/content/uploads/images/amex-card1708.jpg" alt="Amex" className='payment-icon' />
            <img src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys" alt="Apple Pay" className='payment-icon' />
          </div>
        </div>
      </div>

  
      <div className="footer-copyright">
        <p>Copyright 2023 Metta Muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
