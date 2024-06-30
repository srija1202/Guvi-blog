import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import All from './components/All';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import FullStackDevelopment from './components/FullStackDevelopment';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/full-stack-development" element={<FullStackDevelopment />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
