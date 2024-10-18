import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AwardsAndHonors from './components/AwardsandHonors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';
import './styles/typography.css';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="App">
                <Header />
                <div>
                  <About />
                  <Experience />
                  <Projects />
                  <AwardsAndHonors /> 
                  <Footer />
                </div>
              </div>
            } 
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
