import React from 'react';
import './index.css'; // Import the CSS for styling
import logo from './logo.webp'; // Adjust the import path as needed
import workspaceImg from './workspace.png'; // Import the workspace image
import addressIcon from './adress.png'; // Import the address icon
import phoneIcon from './phone.png'; // Import the phone icon
import timeIcon from './time.png'; // Import the time icon
import emailIcon from './email.png'; // Import the email icon

const Contact = () => {
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
          <li><a href="/membres">Members</a></li>
        </ul>
        <a href="#get-started" className="get-started-btn">Get Started</a>
      </nav>

      {/* Workspace Section */}
      <section className="workspace-section" style={{ marginTop: '60px' }}>
        <h2 className='titre'>Join us in our new workspace</h2>
        <div className="workspace-content">
          <img src={workspaceImg} alt="Workspace" className="workspace-img" />
          <div className="workspace-description">
            <p>
              The Park Forskaren, a newly constructed office building in the heart of Stockholm, is designed to foster innovation and collaboration. This state-of-the-art facility brings together businesses, researchers, and entrepreneurs in a dynamic environment that encourages the exchange of ideas. With its modern architecture, sustainable design, and advanced amenities, Forskaren offers a productive and inspiring workspace. Find EWB on the second floor of the Park!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details" style={{ marginTop: '40px' }}>
        <h2>Contact Details</h2>
        <div className="contact-info">
          <div className="info-circle">
            <img src={addressIcon} alt="Address" className="info-icon" />
            <p>Hagaesplanaden 1, 113 68 Stockholm</p>
          </div>
          <div className="info-circle">
            <img src={phoneIcon} alt="Phone" className="info-icon" />
            <p>Mobile: 770-896-4518</p>
          </div>
          <div className="info-circle">
            <img src={timeIcon} alt="Time" className="info-icon" />
            <p>Availability: Daily 09 am - 05 pm</p>
          </div>
          <div className="info-circle">
            <img src={emailIcon} alt="Email" className="info-icon" />
            <p>Email: <a href="mailto:donnie@ewb.world">donnie@ewb.world</a></p>
          </div>
        </div>
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

export default Contact;
