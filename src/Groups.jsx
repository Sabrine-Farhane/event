import React, { useEffect, useState } from 'react';
import './index.css'; // Import the CSS for styling
import logo from './logo.webp'; // Adjust the import path as needed
import member1Img from './grp.png'; // First image
import member2Img from './EWB.png'; // Second image

const Groups = () => {
  const [visibleImage, setVisibleImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImage((prevImage) => (prevImage === 0 ? 1 : 0)); // Toggle between images
    }, 3000); // Change image every 3 seconds
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
          <li><a href="/membres">Members</a></li>
        </ul>
        <a href="/contact" className="get-started-btn">Get Started</a>
      </nav>

      {/* Members Directory Section */}
      <section className="members-content">
        <h1 className="animated-title">Groups Directory</h1>

        {/* Gallery for Members */}
        <section className="gallery-section">
          <div className="gallery">
            {visibleImage === 0 && (
              <div className="gallery-item">
                <img src={member1Img} alt="Member 1" className="gallery-img" />
                <p className="ewb-team">EWB Team</p>
              </div>
            )}
            {visibleImage === 1 && (
              <div className="gallery-item">
                <img src={member2Img} alt="Member 2" className="gallery-img" />
                <p className="ewb-team">EWB Team</p>
              </div>
            )}
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

export default Groups;
