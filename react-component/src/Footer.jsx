import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* ADD id="contact" HERE 👇 */}
      <div className="footer-contact" id="contact">
        <h3>Contact Us</h3>
        <div className="contact-links">
          <p>
            <strong>WhatsApp:</strong>{' '}
            <a 
              href="https://wa.me/qr/XHMJOAT2R446N1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              +62 812-8969-7733
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a 
              href="https://www.instagram.com/starproject_coding/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @starproject_coding
            </a>
          </p>
          <p>
            <strong>TikTok:</strong>{' '}
            <a 
              href="https://www.tiktok.com/@starproject_coding?_r=1&_t=ZS-93HoDR4hzgg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @starproject_coding
            </a>
          </p>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="copyright">&copy; 2026 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;