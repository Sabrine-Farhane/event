import React from 'react';
import './index.css'; // Import the CSS for styling
import logo from './logo.webp'; // Adjust the import path as needed
import startupImg from './donnie.png'; // Import the startup image
import investorImg from './ariful.png'; // Import the investor image

const Membres = () => {
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
          <li><a href="#about">About</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Groups">Groups</a></li>
          <li><a href="/Membres">Members</a></li>
        </ul>
        <a href="/Contact" className="get-started-btn">Get Started</a>
      </nav>

      <section className="members-content">
      <h1 style={{ color: '#6e9a38' } }>Members Directory</h1>


        {/* New Section for Startups and Investors */}
        <section className="collaborative-section">
          <div className="container">
            <div className="startup">
              <h3>Donnie Sc</h3>
              <img src={startupImg} alt="For Startups" />
              <p>@Doonie</p>
            </div>
            <div className="investor">
              <h3>Ariful Islam</h3>
              <img src={investorImg} alt="For Investors" />
              <p>@Ariful</p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer Section */}
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

export default Membres;
