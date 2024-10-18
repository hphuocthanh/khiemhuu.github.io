
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Huu Khiem Nguyen</h1>
      <p>Student of University of Wollongong (UOW)</p>
      <p>Bachelor of Information Technology (Dean's Scholar)</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience and Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#awards">Awards and Honours</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
