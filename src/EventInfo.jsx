import React from 'react';
import './index.css'; // Import your CSS for styling
import logo from './logo.webp'; // Adjust the import path for the logo

const EventInfo = () => {
  return (
    <div className="event-info">
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
          <li><a href="/membres">Members</a></li>
        </ul>
        <a href="#get-started" className="get-started-btn">Get Started</a>
      </nav>

      <h2 className="event-title">EWB SUMMIT & AWARD 2024: Empowering Female Entrepreneurs</h2>
      <p>Welcome to the 2024 edition of Sustainable Entrepreneurship Day with the EWB Summit & Award. This year, we are focusing on supporting female-impact entrepreneurship. The event will showcase female-founded startups and feature keynote speakers, panel discussions, and the 2024 EWB Award.</p>

      <h3>Event Details:</h3>
      <div className="event-details">
        <div className="detail-item">
          <strong>Date:</strong> November 21, 2024
        </div>
        <div className="detail-item">
          <strong>Venue:</strong> A House Ark Backstage, Uggleviksvägen 2a, Stockholm
        </div>
        <div className="detail-item">
          <strong>Time:</strong> 4:30 PM – 8:15 PM (welcome to stay later for the party)
        </div>
        <div className="detail-item">
          <strong>Tickets:</strong> 249 SEK (includes entry, food, and one drink)
        </div>
        <div className="detail-item">
          <strong>Additional Donations:</strong> Can be made via Swish: 123 166 48 53
        </div>
      </div>


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

export default EventInfo;
