import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='content'>
        <div className='textContainer'>
          <p>Mountain Equipment</p>
          <p>Mountains are places of incredible beauty and the raw power of nature, where every step reveals new horizons. To fully enjoy this freedom and explore safely, it’s essential to have reliable, high-quality gear.</p>
        </div>
        <div className='iconContainer'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='iconLink'>
            <img src="/img/facebook.png" alt="Facebook" className='icon' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='iconLink'>
            <img src="/img/twitter.png" alt="Twitter" className='icon' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='iconLink'>
            <img src="/img/youtube-svgrepo-com.svg" alt="Youtube" className='icon' />
          </a>
        </div>
      </div>
      <div className='ruler'></div>
      <p className='copyright'>© 2024 Mauntain Equipment</p>
    </footer>
  );
};

export default Footer;
