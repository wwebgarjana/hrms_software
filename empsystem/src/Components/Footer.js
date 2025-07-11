import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section about">
        <img src="https://webgarjana.com/wp-content/uploads/2021/09/1746793576466-e1746851437889.png"
         alt="Web Garajana Logo" className="footer-logo" />
        <p>
          At Web Garajana, we specialize in delivering cutting-edge IT solutions that empower businesses to thrive in the digital era.
        </p>
        {/* <button className="about-btn">ABOUT US</button> */}
      </div>

      {/* <div className="footer-section links">
        <h3>Quick links</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Services</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </div> */}

      <div className="footer-section info">
        <h3>Official info:</h3>

        {/* Phone */}
        <div className="info-item">
          <div className="info-icon">
            <svg fill="white" height="16" width="16" viewBox="0 0 512 512">
              <path d="M391.1 351c-31.8 0-63.4-5-93.7-14.9-10.6-3.5-22.2-.3-29.8 8.3l-40.6 40.6c-54.3-28.6-98.6-72.9-127.2-127.2l40.6-40.6c8.6-8.6 11.8-20.2 8.3-30.7-9.9-30.3-14.9-61.9-14.9-93.7 0-16.6-13.4-30-30-30H60c-16.6 0-30 13.4-30 30 0 221.3 179.7 401 401 401 16.6 0 30-13.4 30-30v-33.8c0-16.6-13.4-30-30-30z" />
            </svg>
          </div>
          <div>
            <span>Enquire</span><br />
            <strong>8329656664</strong>
          </div>
        </div>

        {/* Email */}
        <div className="info-item">
          <div className="info-icon">
            <svg fill="white" height="16" width="16" viewBox="0 0 512 512">
              <path d="M467 61H45C20.2 61 0 81.2 0 106v300c0 24.8 20.2 45 45 45h422c24.8 0 45-20.2 45-45V106c0-24.8-20.2-45-45-45zM45 91h422c8.3 0 15 6.7 15 15v18.6L256 282.9 30 124.6V106c0-8.3 6.7-15 15-15zm0 330c-8.3 0-15-6.7-15-15V151.4l211 158.3c2.7 2 5.8 3 9 3s6.3-1 9-3l211-158.3V406c0 8.3-6.7 15-15 15H45z" />
            </svg>
          </div>
          <div>
            <span>Send us Email</span><br />
            <strong>Info@webgarjana.com</strong>
          </div>
        </div>

        {/* Location */}
        <div className="info-item">
          <div className="info-icon">
            <svg fill="white" height="16" width="16" viewBox="0 0 512 512">
              <path d="M256 0C167.6 0 96 71.6 96 160c0 112 160 352 160 352s160-240 160-352C416 71.6 344.4 0 256 0zm0 240c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
            </svg>
          </div>
          <div>
            <span>Address</span><br />
            <strong>Office no 108, Business Hub Karvenagar Pune, 411052</strong>
          </div>
        </div>
      </div>

      <div className="footer-section social">
         <h3>Follow Us</h3>
       { /*<div className="social-icons">
          <a href="#"><svg fill="white" width="18" height="18" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 90.4 225.6 208 240V327h-63v-71h63v-54.5c0-62.4 37.3-96.5 94.5-96.5 27.4 0 56 4.9 56 4.9v61.5H384c-31.3 0-41 19.4-41 39.2V256h70l-11 71h-59v169c117.6-14.4 208-116.5 208-240z"/></svg></a>
          <a href="#"><svg fill="white" width="18" height="18" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.1.3 8.2.3 12.4 0 126.3-96 272-272 272A269.2 269.2 0 010 407.3a196.2 196.2 0 00144.7-40c-43.1-.8-79.2-29.2-91.6-68.3 6 .9 12 .9 18.3.9a95.7 95.7 0 0059.2-20.5c-41.9-8.1-73.4-45.2-73.4-89v-1.2c12.3 6.9 26.3 11 41.2 11a96.6 96.6 0 01-29.9-128.7A272.8 272.8 0 00230.5 169a108.8 108.8 0 01-2.3-22 95.7 95.7 0 01165.5-65.4 190.6 190.6 0 0060.6-23.1 95.8 95.8 0 01-42.1 52.8 190.8 190.8 0 0055-15.1 204 204 0 01-48 49.9z"/></svg></a>
          <a href="#"><svg fill="white" width="18" height="18" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 186c-39.3 0-71.1-31.8-71.1-71.1s31.8-71.1 71.1-71.1 71.1 31.8 71.1 71.1-31.8 71.1-71.1 71.1zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5S404.1 2.2 368.4.5C331.5-2 116.5 0 116.5 0S41.6.5 5.7 36.4-2.1 112.5.5 149.4c1.7 35.7 9.9 67.3 36.2 93.5s57.9 34.5 93.6 36.2c36.9 1.7 246.9 1.7 246.9 1.7s74.9-.5 110.8-36.4 38-78.6 36.3-114.3z"/></svg></a>
          <a href="#"><svg fill="white" width="18" height="18" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.39 107.3 0 82.8 0 52.89S24.39-1.5 53.84-1.5 107.7 22.9 107.7 52.9c0 29.8-24.38 54.3-53.86 54.3zM447.9 448h-92.4V302.4c0-34.7-.7-79.4-48.4-79.4-48.5 0-55.9 37.9-55.9 77v148H158.8V148.9h88.8v40.8h1.3c12.4-23.5 42.8-48.4 88-48.4 94.2 0 111.6 62.1 111.6 142.8V448z"/></svg></a>
        </div> */}
        <div className="timings">
          <p><strong>Open Hours:</strong></p>
          <p>Mon – Sat: 9:30 am – 8 pm,</p>
          <p><strong>Sunday: CLOSED</strong></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Web Garjana. All rights reserved.</p>
        <div className="scroll-top">
          <a href="#top">↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
