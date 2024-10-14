import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Import the HomePage component
import Membres from './Membres'; // Import Membres component
import Groups from './Groups'; // Import Groups component
import Contact from './Contact'; // Corrected to Contact
import './index.css'; // Global styles
import  About from'./About';
import EventInfo from './EventInfo'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/membres" element={<Membres />} />
        <Route path="/groups" element={<Groups />} /> {/* Route for Groups */}
        <Route path="/contact" element={<Contact />} /> {/* Corrected Contact route */}
        <Route path="/about" element={<About />} />
       < Route path="eventInfo" element={<EventInfo />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
