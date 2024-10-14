import React, { useEffect, useState } from 'react';
import './index.css'; // Import the CSS for styling
import logo from './logo.webp'; // Adjust the import path for the logo
import aboutImg from './abt.png'; // Import the about image
import successImg from './success.png'; // Import the success image
import darwinImg from './darwin.png'; // Import Darwin image
import johnImg from './john.png'; // Import John image
import lindaImg from './linda.png'; // Import Linda image
import jessicaImg from './jessica.png'; // Import Jessica image

const About = () => {
  // Dynamic counting for success stats
  const [yearsExperience, setYearsExperience] = useState(0);
  const [nationwideInfluence, setNationwideInfluence] = useState(0);
  const [partnerships, setPartnerships] = useState(0);
  const [talents, setTalents] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration
    const increment = (setFunction, endValue) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start <= endValue) setFunction(start);
        else clearInterval(interval);
      }, duration / endValue);
    };

    increment(setYearsExperience, 23);
    increment(setNationwideInfluence, 20);
    increment(setPartnerships, 10);
    increment(setTalents, 80);
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
        <a href="#get-started" className="get-started-btn">Get Started</a>
      </nav>

      {/* About Us Section */}
      <section className="about-section" style={{ marginTop: '60px' }}>
        <h2 className="title" style={{ textAlign: 'center', color: '#6e9a38' }}>About Us</h2>
        <div className="about-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={aboutImg} alt="About Us" className="about-img" style={{ width: '250px', borderRadius: '10px', marginRight: '20px' }} />
          <div className="about-description" style={{ maxWidth: '600px' }}>
            <p>Entrepreneurs Without Borders is a pioneering organization dedicated to empowering female entrepreneurs from around the globe.
        Founded by Donnie Lygonis, our mission is to foster a collaborative environment where women can share ideas, connect with investors, 
        and accelerate the growth of their startups.</p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section>
        <h2 className="driving-innovation">Driving Innovation with Values in Our Startup World</h2>
        <div className="vision-mission-section">
          <div className="vision" style={{ border: '2px solid #88A649', padding: '20px', borderRadius: '10px', marginRight: '20px' }}>
            <h3>Our Vision</h3>
            <p>We envision a world where female entrepreneurs from all corners of the globe thrive and lead in business. Our goal is to create an inclusive ecosystem where women are equipped with the tools, mentorship, and opportunities to succeed, driving sustainable growth for future generations.</p>
          </div>
          <div className="mission" style={{ border: '2px solid #88A649', padding: '20px', borderRadius: '10px' }}>
            <h3>Our Mission</h3>
            <p>Entrepreneurs Without Borders is dedicated to empowering women entrepreneurs through biweekly sessions, mentorship programs, and access to investors. Our mission is to accelerate female-led ventures while contributing to global gender equality and economic development.</p>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="success-section">
        <h2 className="title">Unveiling the Success of Our Startup Venture Expedition</h2>
        <div className="success-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          {/* Left Stats */}
          <div className="success-stats-left" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="stat-item">
              <h3>{yearsExperience}+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>{nationwideInfluence}+</h3>
              <p>Nationwide Influence</p>
            </div>
          </div>
          {/* Success Image */}
          <img src={successImg} alt="Success" className="success-img" style={{ width: '150px', margin: '0 40px' }} />
          {/* Right Stats */}
          <div className="success-stats-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="stat-item">
              <h3>{partnerships}+</h3>
              <p>Establish Partnerships</p>
            </div>
            <div className="stat-item">
              <h3>{talents}+</h3>
              <p>Professional Talents</p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section" style={{ marginTop: '60px' }}>
  <h2 className="title" style={{ textAlign: 'center', color: '#6e9a38' }}>Meet Our Team</h2>
  <div className="team-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    <div className="team-member" style={{ textAlign: 'center', margin: '20px' }}>
      <img src={darwinImg} alt="Darwin Luiz" className="team-img" style={{ borderRadius: '50%', width: '150px', height: '150px', border: '3px solid #88A649' }} />
      <h3>CEO & Founder</h3>
      <p>Darwin Luiz</p>
    </div>
    <div className="team-member" style={{ textAlign: 'center', margin: '20px' }}>
      <img src={johnImg} alt="John Mayer" className="team-img" style={{ borderRadius: '50%', width: '150px', height: '150px', border: '3px solid #88A649' }} />
      <h3>VP of Product</h3>
      <p>John Mayer</p>
    </div>
    <div className="team-member" style={{ textAlign: 'center', margin: '20px' }}>
      <img src={lindaImg} alt="Linda Rose" className="team-img" style={{ borderRadius: '50%', width: '150px', height: '150px', border: '3px solid #88A649' }} />
      <h3>VP of Design</h3>
      <p>Linda Rose</p>
    </div>
    <div className="team-member" style={{ textAlign: 'center', margin: '20px' }}>
      <img src={jessicaImg} alt="Jessica Janet" className="team-img" style={{ borderRadius: '50%', width: '150px', height: '150px', border: '3px solid #88A649' }} />
      <h3>Project Manager</h3>
      <p>Jessica Janet</p>
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

export default About;
