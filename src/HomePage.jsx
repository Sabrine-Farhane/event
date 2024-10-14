import React, { useEffect, useState } from 'react';
import './index.css'; // Import the CSS for styling
import logo from './logo.webp'; // Adjust the import path as needed
import femme1 from '../src/femme1.png'; // Import the images
import femme2 from '../src/femme2.png'; // Import the images
import sponsorLogo from '../src/pub.png'; // Import the sponsor logo
import startupImg from '../src/satartup.png';
import benLogo from '../src/bendega.png'; // Import the sponsor logo
import dyamoLogo from '../src/dyamo.png';
import investorImg from '../src/investor.png'; // Import the investor image
import entrepImg from '../src/entrep.png'; // Import the entrepreneur image

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState('');

  const fullText = "Entrepreneurs Without Borders works with female founders of impact businesses aligned with the UN’s Sustainable Development Goals to scale their businesses internationally.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* Event Navbar */}
      <nav className="event-navbar">
        <ul>
          <li><a href="/EventInfo">Event Overview</a></li>
         
        </ul>
      </nav>

      {/* Main Navbar */}
      <nav className="navbar">
        <img src={logo} alt="EWB Logo" className="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Groups">Groups</a></li>
          <li><a href="/Membres">Members</a></li>
        </ul>
        <a href="/contact" className="get-started-btn">Get Started</a>
      </nav>

      {/* Animated Content Section */}
      <section className="animated-content">
        <h3 className="main-title">Spreading Good Ideas Faster</h3>
        <div className="content-flex">
          <p className="impact-text">{displayedText}</p>
          <div className="image-container">
            <img src={femme1} alt="Female Entrepreneur 1" className="fixed-image" />
            <img src={femme2} alt="Female Entrepreneur 2" className="fixed-image" />
          </div>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/DQemZuFJ8MQ?autoplay=1&mute=1" // Autoplay and mute settings
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* New Section for "What We Do", "Crafting Your Successful Growth Journey", and Sponsors */}
      <section className="info-container">
        <div className="what-we-do">
          <h2>What We Do</h2>
          <p>
            Entrepreneurs Without Borders is a Swedish organisation that works with female-founded impact start-ups to scale internationally and profitably. We invest in developing a suite of services, a global network of expertise, and a platform with customizable assets required for a variety of growth models, focusing on franchise models for impact start-ups aligned with the UN’s Sustainable Development Goals.
          </p>
        </div>
        <div className="growth-journey">
          <h3 className="dynamic-title">Crafting Your Successful Growth Journey</h3>
          <p>
            One of the most significant barriers for female founders is disproportionately low access to capital. EWB partners with female founders on their scale-up journey to explore alternative growth models and tap into new networks for community and funding.
          </p>
        </div>
        <div className="sponsor-section">
          <h3>Sponsors</h3>
          <div className="sponsor-logos" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <img src={sponsorLogo} alt="Sponsor Logo 1" className="sponsor-logo" />
            <img src={benLogo } alt="Sponsor Logo 2" className="sponsor-logo" />
            <img src={dyamoLogo} alt="Sponsor Logo 3" className="sponsor-logo" />
          </div>
        </div>
      </section>

      {/* New Section for Startups, Investors, and Entrepreneurs */}
      <section className="collaborative-section">
        <div className="container">
          <div className="startup">
            <h3>For Startups</h3>
            <img src={startupImg} alt="For Startups" />
            <p>We help social impact startups scale and grow globally through our proprietary franchise model. Join the EWB network and see your business idea spread across the world.</p>
          </div>
          <div className="investor">
            <h3>For Investors</h3>
            <img src={investorImg} alt="For Investors" />
            <p>Join the EWB investor network for a vetted deal flow of social impact ideas that have a proven business model and validated product-market fit.</p>
          </div>
          <div className="entrepreneur">
            <h3>For Entrepreneurs</h3>
            <img src={entrepImg} alt="For Entrepreneurs" />
            <p>Join the EWB network and become a franchisee of a handpicked social impact startup that is ready to scale. Create tangible positive impact in your home community.</p>
          </div>
        </div>
      </section>

      

      

      <footer className="footer">
  <div className="footer-content">
    <div className="contact-info">
      
      <ul>
        <li><h4>Contact Information</h4></li>
        <li>Hagaesplanaden 1, 113 68 Stockholm</li>
        <li>Email: <a href="mailto:donnie@ewb.world">donnie@ewb.world</a></li>
        <li>Phone: 770-896-4518</li>
        <li><div className="social-links">
        <a href="https://www.facebook.com/ewbworld/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/company/entrepreneurswithoutborders" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div></li>
      </ul>
      
    </div>

    <div className="quick-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/About">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="/AContact">Contact</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
    </div>

    <div className="services">
      <h4>Our Services</h4>
      <ul>
        <li>UI/UX Design</li>
        <li>Mobile App Development</li>
        <li>Web Development</li>
        <li>Cloud Services</li>
      </ul>
    </div>

    <div className="newsletter">
      <h4>Get Latest Update</h4>
      <p>Building a better world—one idea, one connection, and one startup at a time.</p>
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HomePage;
